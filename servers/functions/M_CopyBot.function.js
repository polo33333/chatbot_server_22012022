const Bot = require('../models/Bot.model');
const Intent = require('../models/Intent.model');
const Entity = require('../models/Entity.model');
const Step = require('../models/Step.model');
const Block = require('../models/Block.model');
const Config = require('../models/Config.model');
const Auth = require('../models/Auth.model');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
const fetch = require('node-fetch');
const config = require('../../config');
const P_Wit = require('../functions/P_Wit.function');

exports.copyBot = async (obj, botId, fileName) => {

  try {


    let json = await P_Wit.import(fileName, './wit_resource/' + fileName + '.zip', config.access_token);

    if (json.error == undefined) {
      obj.appId = json.app_id;
      obj.botId = json.access_token;
      obj.appName = fileName;
      obj.partners = [{ userName: obj.owner, owner: true, role: 0 }]
      let bot = await Bot.create(obj);

      if (bot) {
        let _auth = await Auth.findOne({ userName: obj.owner.toLowerCase() })
        _auth.apps.push(bot.botId);
        await _auth.save();


        // intents

        let int = await Intent.find({ botId: botId });

        let temp_intents = [];
        if (int.length > 0)
          for (let i = 0; i < int.length; i++) {
            let temp = {};
            temp.botId = bot.botId;
            temp.name = int[i].name;
            temp.isActive = int[i].isActive;
            temp.isSystem = int[i].isSystem;
            temp._oldId = int[i]._id;
            temp_intents.push(temp);
          }

        await Intent.create(temp_intents);

        // entities
        let ent = await Entity.find({ botId: botId });
        let ent_save = [];
        let temp_entity = [];
        if (ent.length > 0)
          for (let i = 0; i < ent.length; i++) {
            let temp = {};
            temp.botId = bot.botId;
            temp.type = ent[i].type;
            temp.desc = ent[i].desc;
            temp.lookups = ent[i].lookups;
            temp.isEntity = ent[i].isEntity;
            temp.isSystem = ent[i].isSystem;
            temp.isActive = ent[i].isActive;
            temp.name = ent[i].name;
            temp.roles = ent[i].roles;
            temp._oldId = ent[i]._id;
            temp_entity.push(temp);

          }

        ent_save = await Entity.create(temp_entity);


        // block
        let bloc = await Block.find({ botId: botId });
        let bloc_save = [];
        let temp_block = [];
        if (bloc.length > 0)
          for (let i = 0; i < bloc.length; i++) {
            let temp = {};
            temp.botId = bot.botId;
            temp.isParent = bloc[i].isParent;
            temp.isActive = bloc[i].isActive;
            temp.isDefaut = bloc[i].isDefaut;
            temp.position = bloc[i].position;
            temp.name = bloc[i].name;
            temp.intentName = bloc[i].intentName;
            temp.blockId = bloc[i].blockId == undefined ? null : bloc[i].blockId;
            temp._oldId = bloc[i]._id;

            temp_block.push(temp);

          }

        bloc_save = await Block.create(temp_block);

        let bloc_child = await Block.find({ botId: bot.botId, isParent: false, blockId: { "$ne": null } });



        if (bloc_child) {
          for (let i = 0; i < bloc_child.length; i++) {
            let el = bloc_child[i];

            let bloc_parent = await Block.findOne({ botId: bot.botId, isParent: true, _oldId: el.blockId });
            if (bloc_parent != undefined) {
              el.blockId = bloc_parent._id;
              let x = await el.save();
            }


          }
        }




        // config
        let temp_config = {
          botId: bot.botId,
          zalo_webhook: config.server_url + '/' + bot.botId + '/Zalo/Webhook',
          fa_webhook: config.server_url + '/' + bot.botId + '/Facebook/Webhook',
          fa_verify_token: Date.now().toString(),
        }
        await Config.create(temp_config);

        // step
        let step = await Step.find({ botId: botId });

        let temp_step = [];
        if (step.length > 0)
          for (let i = 0; i < step.length; i++) {
            let temp1 = {};
            temp1.botId = bot.botId;
            temp1.conditions = step[i].conditions;
            temp1.conditions.forEach(el => {
              let temp = ent_save.filter(e => e._oldId == el.variable_id);
              if (temp.length != 0) {

                el.variable_id = temp[0]._id;
              }
            });

            temp1.items = step[i].items;
            switch (step[i].type) {
              case "text-card":
                try {
                  //console.log("text-card");
                  if (step[i].items[0].button.length != 0) {
                    for (let y = 0; y < step[i].items[0].button.length; y++) {
                      let el = step[i].items[0].button[y];
                      if (el.redirectToBlock != undefined) {
                        let temp = bloc_save.filter(e => e._oldId == el.redirectToBlock);
                        if (temp.length != 0) {
                          el.redirectToBlock = temp[0]._id;
                        }
                      }

                      if (el.key != undefined) {
                        let temp = ent_save.filter(e => e._oldId == el.key);
                        if (temp.length != 0) {
                          el.key = temp[0]._id;
                        }
                      }

                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:text-card]: ' + error);
                  break;
                }

              case "form-card":
                try {
                  //console.log("form-card")
                  if (step[i].items.length != 0) {
                    for (let y = 0; y < step[i].items.length; y++) {
                      let el = step[i].items[y];
                      if (el.variable_id != undefined) {
                        let temp = ent_save.filter(e => e._oldId == el.variable_id);
                        if (temp.length != 0) {
                          el.variable_id = temp[0]._id;
                        }
                      }
                    }

                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:form-card]: ' + error);
                  break;
                }

              case "image-card":
                try {
                  //console.log("image-card")
                  if (step[i].items[0].button.length != 0) {
                    for (let y = 0; y < step[i].items[0].button.length; y++) {
                      let el = step[i].items[0].button[y];
                      if (el.redirectToBlock != undefined) {
                        let temp = bloc_save.filter(e => e._oldId == el.redirectToBlock);
                        if (temp.length != 0) {
                          el.redirectToBlock = temp[0]._id;
                        }
                      }

                      if (el.key != undefined) {
                        let temp = ent_save.filter(e => e._oldId == el.key);
                        if (temp.length != 0) {
                          el.key = temp[0]._id;
                        }
                      }

                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:image-card: ' + error);
                  break;
                }
              case "info-card":
                try {
                  //console.log("info-card")
                  if (step[i].items[0].elememts.length != 0) {
                    for (let y = 0; y < step[i].items[0].elememts.length; y++) {
                      let el = step[i].items[0].elememts[y].button;
                      if (el.length != 0 && el[0].redirectToBlock != undefined) {
                        let temp = bloc_save.filter(e => e._oldId == el[0].redirectToBlock);
                        if (temp.length != 0) {
                          el[0].redirectToBlock = temp[0]._id;
                        }
                      }

                      if (el.length != 0 && el[0].key != undefined) {
                        let temp = ent_save.filter(e => e._oldId == el[0].key);
                        if (temp.length != 0) {
                          el[0].key = temp[0]._id;
                        }
                      }
                    }

                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:info-card: ' + error);
                  break;
                }
              case "product-card":

                try {
                  //console.log("product-card")
                  if (step[i].items[0].elememts.length != 0) {
                    for (let y = 0; y < step[i].items[0].elememts.length; y++) {
                      let el = step[i].items[0].elememts[y].button;


                      for (let i1 = 0; i1 < el.length; i1++) {

                        let el1 = el[i1];
                        if (el1.length != 0 && el1.redirectToBlock != undefined) {
                          let temp = bloc_save.filter(e => e._oldId == el1.redirectToBlock);
                          if (temp.length != 0) {
                            el1.redirectToBlock = temp[0]._id;
                          }
                        }

                        if (el1.length != 0 && el1.key != undefined) {
                          let temp = ent_save.filter(e => e._oldId == el1.key);
                          if (temp.length != 0) {
                            el1.key = temp[0]._id;
                          }
                        }
                      }

                    }

                  }


                  if (step[i].items[0].variable_id != undefined) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].variable_id);
                    if (temp.length != 0) {
                      step[i].items[0].variable_id = temp[0]._id;
                    }
                  }
                  break;
                }

                catch (error) {
                  console.log('Error[M_CopyBot:product-card: ' + error);
                  break;
                }

              case "go-to-card":

                try {
                  if (step[i].items.length != 0) {
                    if (step[i].items[0].blockId != undefined) {
                      let temp = bloc_save.filter(e => e._oldId == step[i].items[0].blockId);
                      if (temp.length != 0) {
                        step[i].items[0].blockId = temp[0]._id;
                      }
                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:go-to-card: ' + error);
                  break;
                }
              case "api-card":

                break;

              case "memory-card":
                try {

                  if (step[i].items[0].removeVariables.length != 0) {
                    for (let y = 0; y < step[i].items[0].removeVariables.length; y++) {
                      let el = step[i].items[0].removeVariables[y];
                      let temp = ent_save.filter(e => e._oldId == el);
                      if (temp.length != 0) {
                        el = temp[0]._id;

                      }
                    }
                  }

                  if (step[i].items[0].setVariables.length != 0) {
                    for (let y = 0; y < step[i].items[0].setVariables.length; y++) {
                      let el = step[i].items[0].setVariables[y];
                      let temp = ent_save.filter(e => e._oldId == el.variable_id);
                      if (temp.length != 0) {
                        el.variable_id = temp[0]._id;

                      }
                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:memory-card: ' + error);
                  break;
                }
              case "phone-card":
                try {
                  if (step[i].items[0].saveToVariable != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].saveToVariable);
                    if (temp.length != 0) {
                      step[i].items[0].saveToVariable = temp[0]._id;

                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:phone-card: ' + error);
                  break;
                }
              case "email-card":
                try {
                  if (step[i].items[0].saveToVariable != null) {
                    //let el = step[i].items[0].saveToVariable;
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].saveToVariable);
                    if (temp.length != 0) {
                      step[i].items[0].saveToVariable = temp[0]._id;

                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:email-card: ' + error);
                  break;
                }
              case "support-card":
                break;

              case "survey-card":
                break;

              case "admin-via-email-card":
                break;

              case "order-card":
                try {

                  if (step[i].items[0].button.length != 0) {
                    for (let y = 0; y < step[i].items[0].button.length; y++) {
                      let el = step[i].items[0].button[y];
                      if (el.redirectToBlock != undefined) {
                        let temp = bloc_save.filter(e => e._oldId == el.redirectToBlock);
                        if (temp.length != 0) {
                          el.redirectToBlock = temp[0]._id;
                        }
                      }

                      if (el.key != undefined) {
                        let temp = ent_save.filter(e => e._oldId == el.key);
                        if (temp.length != 0) {
                          el.key = temp[0]._id;
                        }
                      }

                    }
                  }

                  if (step[i].items[0].k_customer.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_customer.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_customer.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_phone.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_phone.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_phone.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_email.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_email.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_email.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_product.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_product.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_product.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_price.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_price.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_price.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_count.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_count.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_count.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_amount.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_amount.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_amount.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_address.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_address.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_address.key = temp[0]._id;
                    }
                  }

                  if (step[i].items[0].k_note.key != null) {
                    let temp = ent_save.filter(e => e._oldId == step[i].items[0].k_note.key);
                    if (temp.length != 0) {
                      step[i].items[0].k_note.key = temp[0]._id;
                    }
                  }
                  break;
                }
                catch (error) {
                  console.log('Error[M_CopyBot:order-card: ' + error);
                  break;
                }


              default:
                break;
            }


            let bloc_step = await Block.findOne({ botId: bot.botId, _oldId: step[i].blockId });
            if (bloc_step != null) {
              temp1.blockId = bloc_step._id;
              temp1.isActive = step[i].isActive;
              temp1.type = step[i].type;
              temp1.name = step[i].name;
              temp1.position = step[i].position;
              temp1._oldId = step[i]._id;

              temp_step.push(temp1)
            }


          }

        await Step.create(temp_step);


        return true;
      }

      return false;
    }
    return false;


  } catch (error) {

    console.log('Error[M_CopyBot:copy]: ' + error);
    return false;
  }

};

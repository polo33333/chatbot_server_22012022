const C_String = require('../functions/C_String.function');


function _replace(a, b, x) {

    let search = `${a}`
    //let replacer = new RegExp(search, 'g')
    return x.replace(a, b)
}

function _getValue(text, variables, entityList) {

    try {



        for (let i = 0; i < entityList.length; i++) {
            let el = entityList[i];
            let value = variables.find(f => f._id == el._id);
            if (value != undefined) {

                text = _replace(`{{${el.name}}}`, value.value, text);
            }



        }

        return text

    } catch (error) {
        console.log('Error[M_MappingValue:_getValue]: ' + error);
        return text;
    }

}


exports.mapping = (text, mem, entityList) => {

    try {
        return _getValue(text, mem, entityList);

    } catch (error) {
        console.log('Error[M_MappingValue:mapping]: ' + error);
        return text;
    }

}

exports.mappingForOrder = (key, variables) => {

    try {
        if (key != null) {
            let value = variables.find(f => f._id == key);
            if (value != undefined) {

                return value.value;
            }
        }
        return null

    } catch (error) {
        console.log('Error[M_MappingValue:mappingForOrder]: ' + error);
        return text;
    }

}

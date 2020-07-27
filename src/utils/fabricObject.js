import { uuid } from "uuidv4";
import { fabric } from 'fabric';

const createFabricObject = (type, options = {}) => {
    let obj = new fabric[type]();

    obj.toObject = (function(toObject) {
        return function() {
            return fabric.util.object.extend(toObject.call(this), {
                id: this.get('id')
            });
        };
    })(obj.toObject);

    obj.id = uuid();
    obj.set({ ...options });

    return obj;
};

export default createFabricObject;


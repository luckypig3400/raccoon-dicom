"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonPatch = exports.createJsonPatchProxy = void 0;
const java_bridge_1 = require("java-bridge");
/**
 * Create a proxy for the {@link JsonPatch} interface.
 * All required methods in {@link JsonPatchInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
function createJsonPatchProxy(methods, opts) {
    return (0, java_bridge_1.newProxy)('javax.json.JsonPatch', methods, opts);
}
exports.createJsonPatchProxy = createJsonPatchProxy;
/**
 * Class javax.json.JsonPatch.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonPatchClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
class JsonPatch extends (0, java_bridge_1.importClass)('javax.json.JsonPatch') {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    constructor() {
        super();
    }
}
exports.JsonPatch = JsonPatch;
exports.default = JsonPatch;
//# sourceMappingURL=JsonPatch.js.map
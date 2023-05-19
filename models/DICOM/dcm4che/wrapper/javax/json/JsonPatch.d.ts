import { JavaClass, InterfaceProxyOptions, JavaInterfaceProxy } from "java-bridge";
import { JsonStructure as javax_json_JsonStructure, JsonStructureInterface as javax_json_JsonStructureInterface } from "./JsonStructure";
import { JsonArray as javax_json_JsonArray } from "./JsonArray";
/**
 * This class just defines types, you should import {@link JsonPatch} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonPatchClass extends JavaClass {
    /**
     * @param var0 original type: 'javax.json.JsonStructure'
     * @return original return type: 'javax.json.JsonStructure'
     */
    apply(var0: javax_json_JsonStructure | JavaInterfaceProxy<javax_json_JsonStructureInterface> | null): Promise<javax_json_JsonStructure | null>;
    /**
     * @param var0 original type: 'javax.json.JsonStructure'
     * @return original return type: 'javax.json.JsonStructure'
     */
    applySync(var0: javax_json_JsonStructure | JavaInterfaceProxy<javax_json_JsonStructureInterface> | null): javax_json_JsonStructure | null;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    toJsonArray(): Promise<javax_json_JsonArray | null>;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    toJsonArraySync(): javax_json_JsonArray | null;
}
/**
 * This interface just defines types for creating proxies,
 * you should use {@link createJsonPatchProxy} for actually creating the proxies.
 *
 * Optional methods in here may still be required by java.
 * This is caused by typescript not allowing to have both optional and
 * non-optional signatures for the same interface member.
 *
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export interface JsonPatchInterface {
    /**
     * @param var0 original type: 'javax.json.JsonStructure'
     * @return original return type: 'javax.json.JsonStructure'
     */
    apply(var0: javax_json_JsonStructure | JavaInterfaceProxy<javax_json_JsonStructureInterface> | null): javax_json_JsonStructure | null;
    /**
     * @return original return type: 'javax.json.JsonArray'
     */
    toJsonArray(): javax_json_JsonArray | null;
}
/**
 * Create a proxy for the {@link JsonPatch} interface.
 * All required methods in {@link JsonPatchInterface} must be implemented.
 *
 * @param methods the methods to implement
 * @param opts the proxy options
 * @return the proxy
 */
export declare function createJsonPatchProxy(methods: JsonPatchInterface, opts?: InterfaceProxyOptions): JavaInterfaceProxy<JsonPatchInterface>;
declare const JsonPatch_base: typeof JsonPatchClass;
/**
 * Class javax.json.JsonPatch.
 *
 * This actually imports the java class for further use.
 * The class {@link JsonPatchClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class JsonPatch extends JsonPatch_base {
    /**
     * Private constructor to prevent instantiation
     * as this is either an abstract class or an interface
     */
    private constructor();
}
export default JsonPatch;
//# sourceMappingURL=JsonPatch.d.ts.map
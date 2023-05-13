import { JavaClass, BasicOrJavaType } from "java-bridge";
import { Boolean as java_lang_Boolean } from "./../../lang/Boolean";
import { Component as java_awt_Component } from "./../Component";
import { DropTarget as java_awt_dnd_DropTarget } from "./DropTarget";
import { Long as java_lang_Long } from "./../../lang/Long";
import { Integer as java_lang_Integer } from "./../../lang/Integer";
import { Class as java_lang_Class } from "./../../lang/Class";
/**
 * This class just defines types, you should import {@link DropTargetContext} instead of this.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DropTargetContextClass extends JavaClass {
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    dropComplete(var0: java_lang_Boolean | boolean): Promise<void>;
    /**
     * @param var0 original type: 'boolean'
     * @return original return type: 'void'
     */
    dropCompleteSync(var0: java_lang_Boolean | boolean): void;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getComponent(): Promise<java_awt_Component | null>;
    /**
     * @return original return type: 'java.awt.Component'
     */
    getComponentSync(): java_awt_Component | null;
    /**
     * @return original return type: 'java.awt.dnd.DropTarget'
     */
    getDropTarget(): Promise<java_awt_dnd_DropTarget | null>;
    /**
     * @return original return type: 'java.awt.dnd.DropTarget'
     */
    getDropTargetSync(): java_awt_dnd_DropTarget | null;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @param var1 original type: 'int'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number, var1: java_lang_Integer | number): void;
    /**
     * @return original return type: 'void'
     */
    wait(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    waitSync(): void;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    wait(var0: java_lang_Long | bigint | number): Promise<void>;
    /**
     * @param var0 original type: 'long'
     * @return original return type: 'void'
     */
    waitSync(var0: java_lang_Long | bigint | number): void;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equals(var0: BasicOrJavaType | null): Promise<boolean>;
    /**
     * @param var0 original type: 'java.lang.Object'
     * @return original return type: 'boolean'
     */
    equalsSync(var0: BasicOrJavaType | null): boolean;
    /**
     * @return original return type: 'java.lang.String'
     */
    toString(): Promise<string>;
    /**
     * @return original return type: 'java.lang.String'
     */
    toStringSync(): string;
    /**
     * @return original return type: 'int'
     */
    hashCode(): Promise<number>;
    /**
     * @return original return type: 'int'
     */
    hashCodeSync(): number;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClass(): Promise<java_lang_Class>;
    /**
     * @return original return type: 'java.lang.Class'
     */
    getClassSync(): java_lang_Class;
    /**
     * @return original return type: 'void'
     */
    notify(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifySync(): void;
    /**
     * @return original return type: 'void'
     */
    notifyAll(): Promise<void>;
    /**
     * @return original return type: 'void'
     */
    notifyAllSync(): void;
}
declare const DropTargetContext_base: typeof DropTargetContextClass;
/**
 * Class java.awt.dnd.DropTargetContext.
 *
 * This actually imports the java class for further use.
 * The class {@link DropTargetContextClass} only defines types, this is the class you should actually import.
 * Please note that this statement imports the underlying java class at runtime, which may take a while.
 * This was generated by java-bridge.
 * You should probably not edit this.
 */
export declare class DropTargetContext extends DropTargetContext_base {
}
export default DropTargetContext;
//# sourceMappingURL=DropTargetContext.d.ts.map
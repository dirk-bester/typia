import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ArraySimple = _test_validateStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.validateStringify(input),
    ArraySimple.SPOILERS,
);
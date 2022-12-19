import typia from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicUnion = _test_is(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.is(input),
    DynamicUnion.SPOILERS,
);
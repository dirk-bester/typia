import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectDynamic = _test_assertParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.assertParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
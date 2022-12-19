import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TagLength = _test_assertEquals(
    "TagLength",
    TagLength.generate,
    (input) => typia.assertEquals(input),
);
import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectGenericUnion = _test_validateParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createValidateParse<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
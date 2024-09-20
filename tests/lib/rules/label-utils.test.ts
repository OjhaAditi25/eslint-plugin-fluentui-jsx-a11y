// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import chai from "chai";
import { isInsideLabelTag } from "../../../lib/util/labelUtils";

const assert: Chai.AssertStatic = chai.assert;

console.log(assert);
describe("isInsideLabelTag", function () {
    it("should return true when nested within a Label tag", function () {
        const context = {
            getAncestors: () => [
                {
                    type: "JSXElement",
                    openingElement: { name: { name: "Label" } }
                }
                // Other ancestors as needed...
            ]
        };

        const result = isInsideLabelTag(context);

        assert.isTrue(result);
    });

    it("should return true when nested within a label tag (case-insensitive)", function () {
        const context = {
            getAncestors: () => [
                {
                    type: "JSXElement",
                    openingElement: { name: { name: "label" } }
                }
                // Other ancestors as needed...
            ]
        };

        const result = isInsideLabelTag(context);

        assert.isTrue(result);
    });

    it("should return false when not nested within a Label tag", function () {
        const context = {
            getAncestors: () => [
                {
                    type: "JSXElement",
                    openingElement: { name: { name: "div" } } // Non-Label element
                }
                // Other ancestors as needed...
            ]
        };

        const result = isInsideLabelTag(context);

        assert.isFalse(result);
    });
});

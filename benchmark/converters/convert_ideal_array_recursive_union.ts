import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";
import { $string } from "../../src/functional/$string";
import { $number } from "../../src/functional/$number";

export function convert_ideal_array_recursive_union(
    obj: ArrayRecursiveUnion,
): string {
    function directory(elem: ArrayRecursiveUnion.IDirectory): string {
        return `{
            "id": ${$number(elem.id)},
            "type": "directory,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "children": [${elem.children
                .map((child) => bucket(child))
                .join(", ")}]
        }`;
    }
    function imageFile(elem: ArrayRecursiveUnion.IImageFile): string {
        return `{
            "id": ${$number(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${$number(elem.size)},
            "width": ${$number(elem.width)},
            "height": ${$number(elem.height)},
            "url": ${elem.url}"
        }`;
    }
    function textFile(elem: ArrayRecursiveUnion.ITextFile): string {
        return `{
            "id": ${$number(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${$number(elem.size)},
            "content": ${$string(elem.content)}
        }`;
    }
    function zipFile(elem: ArrayRecursiveUnion.IZipFile): string {
        return `{
            "id": ${$number(elem.id)},
            "type": "file,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "${elem.extension}",
            "size": ${$number(elem.size)},
            "count": ${$number(elem.count)}
        }`;
    }
    function shortcut(elem: ArrayRecursiveUnion.IShortcut): string {
        return `{
            "id": ${$number(elem.id)},
            "type": "directory,
            "name": ${$string(elem.name)},
            "path": ${$string(elem.path)},
            "extension": "lnk,
            "target": ${bucket(elem.target)}
        }`;
    }
    function bucket(elem: ArrayRecursiveUnion.IBucket): string {
        if (elem.type === "directory") return directory(elem);
        else if (elem.type === "file") return file(elem);
        else return shortcut(elem);
    }
    function file(elem: ArrayRecursiveUnion.IFile): string {
        if (elem.extension === "jpg") return imageFile(elem);
        else if (elem.extension === "txt") return textFile(elem);
        else return zipFile(elem as ArrayRecursiveUnion.IZipFile);
    }
    return `[${obj.map((elem) => bucket(elem)).join(", ")}]`;
}
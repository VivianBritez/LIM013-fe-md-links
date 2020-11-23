const route = require("../src/util.js");

// test about path exits?
describe("Path exits", () => {
  describe("Should be able to see if a path exists", () => {
    it("Should be is a function", () => {
      expect(typeof route.pathExist).toBe("function");
    });
    it("Should return true", () => {
      expect(
        route.pathExist(
          "C:/Users/vivia/Documents/md-links/LIM013-fe-md-links/src/util.js"
        )
      ).toBe(true);
    });
    it("Should return false", () => {
      expect(route.pathExist("util.js")).toBe(false);
    });
  });
});

// Test function for path absolute

describe("Convert path relative to absolute", () => {
  describe("path is absolute", () => {
    it("should be is a function", () => {
      expect(typeof route.pathAbsolute).toBe("function");
    });
    it("Should be a path is absolute ", () => {
      expect(
        route.pathAbsolute(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test"
        )
      ).toBe("C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test");
    });
    it("Should convert path relative to absolute", () => {
      expect(route.pathAbsolute("./test")).toBe(
        "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test"
      );
    });
  });
});

describe("File", () => {
  describe("is a file", () => {
    it("Should be is a function", () => {
      expect(typeof route.getFile).toBe("function");
    });
    it("Should return true when is file", () => {
      expect(
        route.getFile(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\src\\util.js"
        )
      ).toBe(true);
    });
    it("Should return false when is not file", () => {
      expect(
        route.getFile(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\src"
        )
      ).toBe(false);
    });
  });
});

describe("Markdown", () => {
  describe("is a markdown file", () => {
    it("Should be is a function", () => {
      expect(typeof route.isMarkdownFile).toBe("function");
    });
    it("Should return true when is markdown file", () => {
      expect(
        route.isMarkdownFile(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\README.md"
        )
      ).toBe(true);
    });
    it("Should return false when is not markdown file", () => {
      expect(
        route.isMarkdownFile(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\README.css"
        )
      ).toBe(false);
    });
  });
});

const outputFileMD = [
  "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md",
  "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\prueba.md",
];

describe("Get all File of Md", () => {
  describe("Find file of md", () => {
    it("Should be a function", () => {
      expect(typeof route.getAllFiles).toBe("function");
    });
    it("should return a file with extencion md", () => {
      expect(
        route.getAllFiles(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\prueba.md"
        )[0]
      ).toBe(
        "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\prueba.md"
      );
    });
    it("should return the file md in the subdirectory", () => {
      expect(
        route.getAllFiles(
          "C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example"
        )
      ).toEqual(outputFileMD);
    });
  });
});

describe(" get md links", () => {
  describe("Find file of md", () => {
    it("Should be a function", () => {
      expect(typeof route.getMdLInk).toBe("function");
    });
    it("Should return file of md", () => {
      expect(route.getMdLInk("C:/Users/vivia/Documents/md-links/LIM013-fe-md-links/test_example")[0].href).toBe(
        "https://github.com/markdown-it/markdown-it");
    });
    it("texto", ()=>{
      expect( route.getMdLInk("C:/Users/vivia/Documents/md-links/LIM013-fe-md-links/test_example")[0].text).toBe("markdown-it");
    });
    it("path", ()=>{
      expect(route.getMdLInk("C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example")[0].path).toBe("C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\test_example\\directory\\file.md");
    });
    it('should return "Invalid path" when path is not valid', () => {
      expect(() => route.getMdLInk('./example/test/invalid.md')).toThrow('Invalid Path');
    });
  });
});

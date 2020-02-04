import DataApi from "../DataApi";
import { data } from "../tset-data";

const dataApiObj = new DataApi(data);

describe("DataApi", function() {
  it("exposes articles as an object", () => {
    const articles = dataApiObj.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it("exposes authors as an object", () => {});
});

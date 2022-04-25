const { PrismaClient } = require("@prisma/client");
const superagent = require("superagent");

const prisma = new PrismaClient();

const user = { title: "draft-example", content: "content-examplenjjgvyh"  ,authorEmail: "kae@example.com" , };



describe("/api/post", () => {

  
  it.only("creates a new draft message and deletes it", async () => {
    const request = await superagent
      .post("http://localhost:3000/api/post")
      .send(user);
    const dbUser = await prisma.user.findFirst({
      where: { email: user.authorEmail },
    });
    console.log(dbUser);
    console.log(request.body);
    const draft = request.body;
    expect(request.ok).toEqual(true);
    expect(request.status).toEqual(200);
    expect(request.body.content).toEqual(user.content);
    expect(request.body.title).toEqual(user.title);
    expect(dbUser.id).toEqual(request.body.authorId);


    expect(dbUser).not.toBeNull();
 

    await prisma.post.delete({ where: { id:request.body.id } });

  });

  
});

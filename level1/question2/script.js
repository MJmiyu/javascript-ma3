//Console.log out elements in JSON file
var json = `{
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
}
`;

var jsonData = JSON.parse(json);
for (var i = 0; i < jsonData.video.length; i++) {
  var video = jsonData.video[i];
  console.log(video.id);
  console.log(video.name);
  console.log(video.url);
  console.log(video.author);

  var data = video.author.data;
  for (var j = 0; j < data.length; j++) {
    var author = data[j];
    console.log(author.name_author);
    console.log(author.url);
    console.log(author.type);
  }
}

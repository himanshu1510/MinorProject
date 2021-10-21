var customers = {};

var candidates = [
  {
    firstname: "Lomesh",
    lastname: "Joshi",
    votecount: 0,
    id: 1,
  },
  {
    firstname: "Yash",
    lastname: "Parmar",
    votecount: 0,
    id: 2,
  },
  {
    firstname: "Arjun",
    lastname: "Rathore",

    id: 3,
    votecount: 0,
  },
  {
    firstname: "Ritik",
    lastname: "Mishra",

    id: 4,
    votecount: 0,
  },
  {
    firstname: "Kritika",
    lastname: "Kabra",

    id: 5,
    votecount: 0,
  },
  {
    firstname: "Neetesh",
    lastname: "Bhadhoria",

    id: 6,
    votecount: 0,
  },
  {
    firstname: "Ayushi",
    lastname: "Jain",

    id: 7,
    votecount: 0,
  },
  {
    firstname: "Palak",
    lastname: "Sharma",

    id: 8,
    votecount: 0,
  },
  {
    firstname: "Nitesh",
    lastname: "Sharma",

    id: 9,
    votecount: 0,
  },
  {
    firstname: "Jitendra",
    lastname: "Patel",

    id: 10,
    votecount: 0,
  },
];

exports.create = function (req, res) {
  var newCustomer = req.body;
  customers["customer" + newCustomer.id] = newCustomer;
  console.log(
    "--->After Post, customers:\n" + JSON.stringify(customers, null, 4)
  );
  res.end("Post Successfully: \n" + JSON.stringify(newCustomer, null, 4));
};

exports.findAll = function (req, res) {
  console.log("--->Find All: \n" + JSON.stringify(customers, null, 4));
  res.end("All Customers: \n" + JSON.stringify(customers, null, 4));
};

// exports.getVoteCount = function(req,res){
// 	res.end("Voting Poll Live: \n" + JSON.stringify(candidates, null, 4));
// }

exports.getVoteCount = function (req, res) {
  res.header("Content-type", "text/html");
  const page = getLiveVotePage(candidates);
  res.end(page);
};
exports.findOne = function (req, res) {
  var customer = customers["customer" + req.params.id];
  console.log("--->Find customer: \n" + JSON.stringify(customer, null, 4));
  res.end("Find a Customer:\n" + JSON.stringify(customer, null, 4));
};

exports.update = function (req, res) {
  var id = parseInt(req.params.id);

  // update data
  console.log("id", id);
  candidates.forEach((item) => {
    console.log("item", item.id, id);
    if (parseInt(item.id) === id) {
      item.votecount += 1;
    }
  });

  res.end("Vote Successfully Placed! \n");
};

// Html page for showing live voting

function getLiveVotePage(candidates) {
  let page = "<h1>Voting Poll Live: </h1><br> <div>";
  candidates.map((candidate) => {
    page += candidateCard(candidate);
  });

  page += "</div>";

  return page;
}

function candidateCard(candidate) {
  let card = "";
  card += "<style>";
  card += ".card {";
  card += "box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);";
  card += "transition: 0.3s;";
  card += "width: 400px;";
  card += "float: left;";
  card += "}";
  card += ".card:hover {";
  card += "box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);";
  card += "}";
  card += ".container {";
  card += "padding: 2px 16px;";
  card += "}";
  card += "</style>";
  card += '<div class="card" >';
  card += '<div class="container">';
  card +=
    "<h4><b>" + candidate.firstname + " " + candidate.lastname + "</b></h4>";
  card += "<p>Vote count = " + candidate.votecount.toString() + "</p>";
  card += "</div>";
  card += "</div>";
  return card;
}

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));


module.exports.getRecommendation = (req, res) => {

  var query = req.query.query || `CREATE (a1:Users {name: 'Rajas Kale', tags: ['SQL','Node','Matlab','AWS','React'], education_role: 'PhD student', professional_role: 'Quality Control', projects_role: 'Pursumé'})
  CREATE (a2:Users {name: 'Alan Zheng', tags: ['React','Express','MongoDB','Node','AngularJS'], education_role: 'Student', professional_role: 'Finance & Operations Analyst', projects_role: 'Pursumé'})
  CREATE (a3:Users {name: 'Lavanya AC', tags: ['Node','React','Python','CSS','SQL'], education_role: 'Student', professional_role: 'Software Engineer', projects_role: 'Pursumé'})
  CREATE (a4:Users {name: 'Anthony Wong', tags: ['Java','SQL','Python','jQuery','C++'], education_role: 'Student', professional_role: 'Andriod Developer', projects_role: 'Viator'})
  CREATE (a5:Users {name: 'Charles Kim', tags: ['React','SQL','AngularJS','Docker','AWS'], education_role: 'Student', professional_role: 'Senior Analyst', projects_role: 'Something Something Recipes'})
  CREATE (a6:Users {name: 'Ming Feng', tags: ['SQL','Heroku','Node','AngularJS','MongoDB'], education_role: 'Student', professional_role: 'Clinical Systems Analyst', projects_role: 'This legacy'})
  CREATE (a7:Users {name: 'Jeffrey Chen', tags: ['AngularJS','HTML','CSS','Matlab','SQL'], education_role: 'Student', professional_role: 'Undergraduate Researcher', projects_role: 'Green field'})
  CREATE (a8:Users {name: 'Tom Dickson', tags: ['SQL','MongoDB','AWS','Docker','Linux'], education_role: 'Student', professional_role: 'KAM and Business Development', projects_role: 'This legacy'})
  CREATE (a9:Users {name: 'Jon Eric Escobedo, E.I.T.', tags: ['CSS','HTML','Material UI','jQuery','MongoDB'], education_role: 'Student', professional_role: 'Sales Engineer / Project Manager', projects_role: 'This Thesis'})
  CREATE (a10:Users {name: 'Alexander Liang', tags: ['Matlab','React','MongoDB','SQL','Node'], education_role: 'Student', professional_role: 'Manufacturing Quality Engineer', projects_role: 'This greenfield'})
  CREATE (a11:Users {name: 'Kriz Cortés', tags: ['Ruby','CSS','HTML','React','Node'], education_role: 'Student', professional_role: 'Creative Head', projects_role: 'This legacy'})
  CREATE (a12:Users {name: 'Oliver Ullman', tags: ['Node','React','SQL','Docker','MongoDB'], education_role: 'Student', professional_role: 'Freelance Web Developer', projects_role: 'Greenfield'})
  CREATE (a13:Users {name: 'Kara Marnell', tags: ['React','SQL','MongoDB','Node','Linux'], education_role: 'Student', professional_role: 'Genius Admin', projects_role: 'Greenfield'})
  CREATE (a14:Users {name: 'Katheryn Wininger', tags: ['MongoDB','AngularJS','AWS','Java','jQuery'], education_role: 'Student', professional_role: 'Research Technologist', projects_role: 'Western Blotting'})
  CREATE (a15:Users {name: 'Seungleal (Brian) Paek', tags: ['MongoDB','React','Express','CSS','Heroku'], education_role: 'Doctorate in Neurobiology of Disease', professional_role: 'Research Technologist', projects_role: 'Dopamine Reuptake for Parkinsons Disease'})
  CREATE (a16:Users {name: 'Alfredo Oliveros', tags: ['Express','Python','CSS','jQuery','Docker'], education_role: 'Doctorate in Molecular Pharmacology', professional_role: 'Data Analysis', projects_role: 'Western Blotting'})
  CREATE (a1)-[:Connection {status:['accept'], reason: ['experience']}]->(a2)
  CREATE (a1)-[:Connection {status:['accept'], reason: ['education']}]->(a3)
  CREATE (a1)-[:Connection {status:['reject'], reason: ['education']}]->(a4)
  CREATE (a1)-[:Connection {status:['reject'], reason: ['education']}]->(a6)
  CREATE (a1)-[:Connection {status:['reject'], reason: ['projects']}]->(a8)
  CREATE (a1)-[:Connection {status:['accept'], reason: ['projects']}]->(a9)
  CREATE (a1)-[:Connection {status:['accept'], reason: ['professional']}]->(a10)
  CREATE (a1)-[:Connection {status:['accept'], reason: ['education']}]->(a16)
  CREATE (a2)-[:Connection {status:['accept'], reason: ['professional']}]->(a1)
  CREATE (a2)-[:Connection {status:['accept'], reason: ['experience']}]->(a3)
  CREATE (a2)-[:Connection {status:['reject'], reason: ['experience']}]->(a4)
  CREATE (a2)-[:Connection {status:['reject'], reason: ['education']}]->(a8)
  CREATE (a2)-[:Connection {status:['reject'], reason: ['experience']}]->(a9)
  CREATE (a2)-[:Connection {status:['accept'], reason: ['professional']}]->(a11)
  CREATE (a3)-[:Connection {status:['accept'], reason: ['projects']}]->(a1)
  CREATE (a3)-[:Connection {status:['accept'], reason: ['experience']}]->(a2)
  CREATE (a3)-[:Connection {status:['accept'], reason: ['education']}]->(a5)
  CREATE (a3)-[:Connection {status:['reject'], reason: ['projects']}]->(a8)
  CREATE (a3)-[:Connection {status:['reject'], reason: ['projects']}]->(a10)
  CREATE (a3)-[:Connection {status:['accept'], reason: ['education']}]->(a11)
  CREATE (a15)-[:Connection {status:['reject'], reason: ['experience']}]->(a2)
  CREATE (a4)-[:Connection {status:['reject'], reason: ['experience']}]->(a1)
  CREATE (a4)-[:Connection {status:['accept'], reason: ['experience']}]->(a3)
  CREATE (a4)-[:Connection {status:['accept'], reason: ['professional']}]->(a8)
  CREATE (a4)-[:Connection {status:['reject'], reason: ['professional']}]->(a10)
  CREATE (a4)-[:Connection {status:['reject'], reason: ['experience']}]->(a11)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['professional']}]->(a1)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['professional']}]->(a4)
  CREATE (a5)-[:Connection {status:['accept'], reason: ['projects']}]->(a6)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['education']}]->(a8)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['education']}]->(a10)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['projects']}]->(a11)
  CREATE (a5)-[:Connection {status:['reject'], reason: ['projects']}]->(a15)
  CREATE (a6)-[:Connection {status:['accept'], reason: ['experience']}]->(a2)
  CREATE (a6)-[:Connection {status:['reject'], reason: ['education']}]->(a3)
  CREATE (a6)-[:Connection {status:['accept'], reason: ['experience']}]->(a7)
  CREATE (a6)-[:Connection {status:['accept'], reason: ['experience']}]->(a8)
  CREATE (a6)-[:Connection {status:['accept'], reason: ['experience']}]->(a10)
  CREATE (a6)-[:Connection {status:['reject'], reason: ['education']}]->(a11)
  CREATE (a7)-[:Connection {status:['reject'], reason: ['education']}]->(a1)
  CREATE (a7)-[:Connection {status:['accept'], reason: ['projects']}]->(a2)
  CREATE (a7)-[:Connection {status:['reject'], reason: ['projects']}]->(a3)
  CREATE (a7)-[:Connection {status:['accept'], reason: ['professional']}]->(a8)
  CREATE (a7)-[:Connection {status:['accept'], reason: ['professional']}]->(a10)
  CREATE (a7)-[:Connection {status:['accept'], reason: ['experience']}]->(a11)
  CREATE (a8)-[:Connection {status:['accept'], reason: ['projects']}]->(a2)
  CREATE (a8)-[:Connection {status:['reject'], reason: ['professional']}]->(a3)
  CREATE (a8)-[:Connection {status:['reject'], reason: ['professional']}]->(a5)
  CREATE (a8)-[:Connection {status:['accept'], reason: ['experience']}]->(a6)
  CREATE (a8)-[:Connection {status:['accept'], reason: ['education']}]->(a7)
  CREATE (a8)-[:Connection {status:['reject'], reason: ['experience']}]->(a10)
  CREATE (a8)-[:Connection {status:['accept'], reason: ['education']}]->(a11)
  CREATE (a8)-[:Connection {status:['accept'], reason: ['experience']}]->(a14)
  CREATE (a9)-[:Connection {status:['accept'], reason: ['education']}]->(a2)
  CREATE (a9)-[:Connection {status:['reject'], reason: ['projects']}]->(a3)
  CREATE (a9)-[:Connection {status:['accept'], reason: ['projects']}]->(a6)
  CREATE (a9)-[:Connection {status:['reject'], reason: ['professional']}]->(a10)
  CREATE (a9)-[:Connection {status:['reject'], reason: ['professional']}]->(a11)
  CREATE (a10)-[:Connection {status:['reject'], reason: ['projects']}]->(a1)
  CREATE (a10)-[:Connection {status:['reject'], reason: ['education']}]->(a3)
  CREATE (a10)-[:Connection {status:['accept'], reason: ['experience']}]->(a6)
  CREATE (a10)-[:Connection {status:['accept'], reason: ['experience']}]->(a8)
  CREATE (a10)-[:Connection {status:['reject'], reason: ['projects']}]->(a11)
  CREATE (a11)-[:Connection {status:['accept'], reason: ['projects']}]->(a1)
  CREATE (a11)-[:Connection {status:['reject'], reason: ['education']}]->(a2)
  CREATE (a11)-[:Connection {status:['accept'], reason: ['experience']}]->(a5)
  CREATE (a11)-[:Connection {status:['accept'], reason: ['experience']}]->(a6)
  CREATE (a11)-[:Connection {status:['reject'], reason: ['experience']}]->(a10)
  CREATE (a11)-[:Connection {status:['reject'], reason: ['education']}]->(a15)
  CREATE (a12)-[:Connection {status:['reject'], reason: ['projects']}]->(a3)
  CREATE (a12)-[:Connection {status:['accept'], reason: ['projects']}]->(a5)
  CREATE (a12)-[:Connection {status:['accept'], reason: ['experience']}]->(a8)
  CREATE (a12)-[:Connection {status:['reject'], reason: ['professional']}]->(a10)
  CREATE (a13)-[:Connection {status:['accept'], reason: ['professional']}]->(a1)
  CREATE (a13)-[:Connection {status:['accept'], reason: ['professional']}]->(a2)
  CREATE (a13)-[:Connection {status:['reject'], reason: ['experience']}]->(a6)
  CREATE (a13)-[:Connection {status:['accept'], reason: ['education']}]->(a10)
  CREATE (a13)-[:Connection {status:['reject'], reason: ['professional']}]->(a12)
  CREATE (a13)-[:Connection {status:['accept'], reason: ['education']}]->(a10)
  CREATE (a13)-[:Connection {status:['reject'], reason: ['experience']}]->(a14)
  CREATE (a14)-[:Connection {status:['reject'], reason: ['projects']}]->(a2)
  CREATE (a14)-[:Connection {status:['accept'], reason: ['professional']}]->(a8)
  CREATE (a14)-[:Connection {status:['accept'], reason: ['education']}]->(a11)
  CREATE (a15)-[:Connection {status:['accept'], reason: ['projects']}]->(a6)
  CREATE (a15)-[:Connection {status:['reject'], reason: ['education']}]->(a8)
  CREATE (a15)-[:Connection {status:['accept'], reason: ['professional']}]->(a13)
  CREATE (a16)-[:Connection {status:['accept'], reason: ['education']}]->(a1)
  CREATE (a16)-[:Connection {status:['accept'], reason: ['professional']}]->(a5)
  CREATE (a16)-[:Connection {status:['reject'], reason: ['education']}]->(a10)
  CREATE (a16)-[:Connection {status:['accept'], reason: ['experience']}]->(a13)

  WITH a1 as me
  MATCH (me:Users)-[:Connection]-(connected:Users)-[:Connection]-(potential:Users)
  WHERE NOT (me)-[:Connection]-(potential:Users)
  RETURN count(potential) as PotentientialMatch, potential.name as Suggesetion
  ORDER BY PotentientialMatch DESC`;

  var result = [];
  var session = driver.session();
    session
      .run(query)
      .subscribe({
        onNext: function(record) {
         result.push(record._fields)
        },
        onCompleted: function() {
          // Completed!
          res.status(200).send(result);
          session.close();
        },
        onError: function(error) {
          console.log(error);
        }
      });
};

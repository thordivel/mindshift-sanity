const createSchema = require('part:@sanity/base/schema-creator')

module.exports = createSchema({
  name: 'mindshift',
  types: [

    {
      title: "Person",
      name: "person",
      type: "document",
      fields: [{
          title: "Name",
          name: "name",
          type: "string"
        }, 
        {	
        	title: "Phone",
        	name: "phone",
        	type: "number"
		},
		{	title: "Email",
			name: "email",
			type: "string"
		},
    { title: "Role",
      name: "role",
      type: "string"
    },
		{	title: "Image",
			name: "Person image",
			type: "image"
		},
    {
          title: "Skills",
          name: "skills",
          type: "array",
          of: [{type: "string"}],
          layout: "tags"
        }

        ]
    },
    {
      title: "Projects",
      name: "projects",
      type: "document",
      fields: [
        {
          title: "Project name",
          name: "projectname",
          type: "string"
        }, 
        {
        	title: "Description",
        	name: "project-description",
        	type: "text"
        }, 
        {
        	title: "Client logo",
        	name: "client-logo",
        	type: "image"
        },
        {
  			title: 'Participants',
  			name: 'participants',
  			type: 'reference',
  			to: [{type: 'person'}]
        },
        {
          title: "Keywords",
          name: "keywords",
          type: "array",
          of: [{type: "string"}],
          layout: "tags"
        }
      ]
    }
  ]
})

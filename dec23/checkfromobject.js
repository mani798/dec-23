var g_class = {

'students':[{
  'name':"mani",
  'marks':"50",
  },
  {
   'name':"srinivas",
   'marks':"80",
  },
  {
   'name':"chaitanya",
   'marks':"85",
  },
  {
   'name':"laxman",
   'marks':"90",
  }
]
};

for (var i=0; i < g_class.students.length; i++) {
       if(g_class.students[i]['marks']>=85){
         console.log(g_class.students[i]['name'],['marks'])
}
}

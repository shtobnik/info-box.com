var STUDENT_METHOD ={
 
        handlerData:function(resJSON){
 
            var templateSource   = $("#student-template").html(),
 
                template = Handlebars.compile(templateSource),
 
                studentHTML = template(resJSON);
 
           $('#my-container').html(studentHTML);
             
        },
        loadStudentData : function(){
 
            $.ajax({
                url:"/src/info_box.json",
                method:'get',
                success:this.handlerData
 
            })
        }
};
 
$(document).ready(function(){
 
    STUDENT_METHOD.loadStudentData();
    
});
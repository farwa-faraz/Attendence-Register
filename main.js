names_array=[]

function submit()
{
    names_array=[] 
    document.getElementById("List_of_names").innerHTML= names_array
    var name_1 = document.getElementById("student_name_1").value
    var name_2 = document.getElementById("student_name_2").value
    var name_3 = document.getElementById("student_name_3").value
    var name_4 = document.getElementById("student_name_4").value
    var name_5 = document.getElementById("student_name_5").value

    names_array.push(name_1)
    names_array.push(name_2)
    names_array.push(name_3)
    names_array.push(name_4)
    names_array.push(name_5)

    console.log(names_array);

    document.getElementById("List_of_names").innerHTML=names_array;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}

function sorting()
{
    names_array.sort();
    console.log(names_array);
    document.getElementById("List_of_names").innerHTML=names_array;
    document.getElementById("student_name_1").value=" "
    document.getElementById("student_name_2").value=" "
    document.getElementById("student_name_3").value=" "
    document.getElementById("student_name_4").value=" "
    document.getElementById("student_name_5").value=" "
    document.getElementById("button_submit").style.display="inline-block";
    document.getElementById("sort").style.display="none";
}
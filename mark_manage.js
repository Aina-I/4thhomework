"use strict";

var student = new Array();
var i = 0,j = 0,x;

function addStudent() {
    i = student.push(document.getElementById('name').value) - 1;
    student[i] = new Object();
    student[i].name = document.getElementById('name').value;
    student[i].class = document.getElementById('class').value;
    student[i].chinese = document.getElementById('chinese').value*1;
    student[i].math = document.getElementById('math').value*1;
    student[i].science = document.getElementById('science').value*1;
    student[i].total = student[i].chinese*1+student[i].math*1+student[i].science*1;

    printStudent(i);
}

function arrange(standard) {
    let arr = new Array();
    let temp = 0;

    for(i = 0;i<student.length;i++)
    {
        arr[i] = i;
    }

    let max = 0;
    for(i = 0;i<student.length;i++)
    {
        max = i;
        for(j = i+1;j<student.length;j++)
        {
            if(student[arr[max]][standard]<student[arr[j]][standard])
            {
                max = j;
                console.log(max);
                console.log(arr[max]);
                console.log(student[arr[max]]);
            }
        }
        temp = arr[max];
        arr[max] = arr[i];
        arr[i] = temp;
    }

    cleanTable();

    for(i = 0;i<student.length;i++)
    {
        printStudent(arr[i]);
    }
}

function printStudent(i) {
    let para = document.createElement('tr');
    para.className = 'studentInfo';
    let element = document.getElementById('table');
    element.appendChild(para);
    let para1 = new Array();
    let node = new Array();

    for(x in student[i])
    {
        j = para1.push(document.createElement('td'))-1;
        node.push(document.createTextNode(student[i][x]));
        para1[j].appendChild(node[j]);
        para.appendChild(para1[j]);
    }
}

function cleanTable() {
    //let element = document.getElementById('table');
    let child = document.getElementsByClassName('studentInfo');
    while (child.length>0)
    {
        document.getElementById('table').removeChild(child[0]);
    }
}

// function swap(a,b) {
//     let temp = new Object();
//     temp = student[a];
//     student[a] = student[b];
//     student[b] = temp;
// }

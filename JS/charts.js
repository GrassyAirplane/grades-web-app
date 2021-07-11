var ctx = document.getElementById('Music').getContext('2d');

const data = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Music = new Chart(ctx, {
    type: 'scatter',
  data: data,
  options: {
    scales: {
      x: {
        beginAtZero: 'true',
        type: 'linear',
        position: 'bottom',
        max:100,
      },
      y: {
        beginAtZero: 'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx2 = document.getElementById('Drama').getContext('2d');

const data2 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Drama = new Chart(ctx2, {
    type: 'scatter',
  data: data2,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx3 = document.getElementById('Communications').getContext('2d');

const data3 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:91,
          y:87.3,
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Communications = new Chart(ctx3, {
    type: 'scatter',
  data: data3,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx4 = document.getElementById('Computer').getContext('2d');

const data4 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Computer = new Chart(ctx4, {
    type: 'scatter',
  data: data4,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx5 = document.getElementById('Biology').getContext('2d');

const data5 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Biology = new Chart(ctx5, {
    type: 'scatter',
  data: data5,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx6 = document.getElementById('Chemistry').getContext('2d');

const data6 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:86,
          y:88.7
      },{
          x:76,
          y:76
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Chemistry = new Chart(ctx6, {
    type: 'scatter',
  data: data6,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx7 = document.getElementById('Physics').getContext('2d');

const data7 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:100,
          y:98
      },{
          x:85,
          y:85
      },{
          x:93,
          y:94.3
      },{
          x:78,
          y:76.3
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Physics = new Chart(ctx7, {
    type: 'scatter',
  data: data7,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx8 = document.getElementById('Functions').getContext('2d');

const data8 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:94,
          y:88.5
      },{
          x:82,
          y:75.7
      },{
          x:96,
          y:93
      },{
          x:100,
          y:98
      },{
          x:90,
          y:85
      },{
          x:98,
          y:94.3
      },{
          x:87,
          y:88.7
      },{
          x:93,
          y:88.7
      },{
          x:75,
          y:76.3
      }
    ],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Functions = new Chart(ctx8, {
    type: 'scatter',
  data: data8,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx9 = document.getElementById('Calculus').getContext('2d');

const data9 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Calculus = new Chart(ctx9, {
    type: 'scatter',
  data: data9,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx10 = document.getElementById('Data').getContext('2d');

const data10 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:95,
          y:93
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Data = new Chart(ctx10, {
    type: 'scatter',
  data: data10,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx11 = document.getElementById('EnglishCollege').getContext('2d');

const data11 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:88,
          y:87.4
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var EnglishCollege = new Chart(ctx11, {
    type: 'scatter',
  data: data11,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx12 = document.getElementById('EnglishUniversity').getContext('2d');

const data12 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
        x:83,
        y:88.5
    },{
        x:80,
        y:75.7
    },{
        x:88,
        y:93
    },{
        x:94,
        y:98
    },{
        x:80,
        y:85
    },{
        x:92,
        y:94.3
    },{
        x:91,
        y:88.7
    },{
        x:87,
        y:88.7
    }
  ],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var EnglishUniversity = new Chart(ctx12, {
    type: 'scatter',
  data: data12,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx13 = document.getElementById('Literacy').getContext('2d');

const data13 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Literacy = new Chart(ctx13, {
    type: 'scatter',
  data: data13,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx14 = document.getElementById('Writers').getContext('2d');

const data14 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Writers = new Chart(ctx14, {
    type: 'scatter',
  data: data14,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx15 = document.getElementById('BusinessLeadership').getContext('2d');

const data15 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var BusinessLeadership = new Chart(ctx15, {
    type: 'scatter',
  data: data15,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx16 = document.getElementById('Accounting').getContext('2d');

const data16 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Accounting = new Chart(ctx16, {
    type: 'scatter',
  data: data16,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx17 = document.getElementById('InternationalBusiness').getContext('2d');

const data17 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var InternationalBusiness = new Chart(ctx17, {
    type: 'scatter',
  data: data17,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx18 = document.getElementById('Economics').getContext('2d');

const data18 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var Economics = new Chart(ctx18, {
    type: 'scatter',
  data: data18,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx19 = document.getElementById('WorldIssues').getContext('2d');

const data19 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:65,
          y:75.7
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var WorldIssues = new Chart(ctx19, {
    type: 'scatter',
  data: data19,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx20 = document.getElementById('ChallengeAndChange').getContext('2d');

const data20 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var ChallengeAndChange = new Chart(ctx20, {
    type: 'scatter',
  data: data20,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx21 = document.getElementById('WorldHistory').getContext('2d');

const data21 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var WorldHistory = new Chart(ctx21, {
    type: 'scatter',
  data: data21,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx22 = document.getElementById('IntroductionKinesiology').getContext('2d');

const data22 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var IntroductionKinesiology= new Chart(ctx22, {
    type: 'scatter',
  data: data22,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
/*----------*/
var ctx23 = document.getElementById('FamiliesInCanada').getContext('2d');

const data23 = {
    datasets: [{
      label: 'Score in Course(X) vs Individual Average(Y)',
      data: [{
          x:88,
          y:88.7
      },{
          x:83,
          y:87.4
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
};

var FamiliesInCanada= new Chart(ctx23, {
    type: 'scatter',
  data: data23,
  options: {
    scales: {
      x: {
        beginAtZero:'true',
        type: 'linear',
        position: 'bottom',
        max:100
      },
      y: {
        beginAtZero:'true',
        max:100
      }
    }
  }
});
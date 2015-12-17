//Wait for page load
$(document).ready(function() {
    //Hide stuff
        $('#Skyline').hide()
        $('#Silhouette').hide()
        $('#Caption').hide()
        $('#CaptionSilhouette').hide()
        $('#Day0').hide()
        $('#Day1').hide()
        $('#Day2').hide()
        $('#Day3').hide()
        $('#Day4').hide()
        $('#Day5').hide()
        $('#Day6').hide()
        $('#Reset').hide()
        $('#Rainfall').hide();
        $('#Snowfall').fadeOut();

	//JSON
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=Philadelphia,USA&cnt=7&units=imperial&APPID=63129a1dccdef5ec10b112bd687224bd", function(data) {
        console.log(data);

    //Time variable
    var Time = new Date();

    //Weekday variables
    var Weekday = new Array(7);
    Weekday[0] = "Sunday";
    Weekday[1] = "Monday";
    Weekday[2] = "Tuesday";
    Weekday[3] = "Wednesday";
    Weekday[4] = "Thursday";
    Weekday[5] = "Friday";
    Weekday[6] = "Saturday";
    var Today = Weekday[Time.getDay()];

    //Day of month variables
    var DayOfMonthNumber = new Array(31);
    DayOfMonthNumber[0] = "1st";
    DayOfMonthNumber[1] = "2nd";
    DayOfMonthNumber[2] = "3rd";
    DayOfMonthNumber[3] = "4th";
    DayOfMonthNumber[4] = "5th";
    DayOfMonthNumber[5] = "6th";
    DayOfMonthNumber[6] = "7th";
    DayOfMonthNumber[7] = "8th";
    DayOfMonthNumber[8] = "9th";
    DayOfMonthNumber[9] = "10th";
    DayOfMonthNumber[10] = "11th";
    DayOfMonthNumber[11] = "12th";
    DayOfMonthNumber[12] = "13th";
    DayOfMonthNumber[13] = "14th";
    DayOfMonthNumber[14] = "15th";
    DayOfMonthNumber[15] = "16th";
    DayOfMonthNumber[16] = "17th";
    DayOfMonthNumber[17] = "18th";
    DayOfMonthNumber[18] = "19th";
    DayOfMonthNumber[19] = "20th";
    DayOfMonthNumber[20] = "21st";
    DayOfMonthNumber[21] = "22nd";
    DayOfMonthNumber[22] = "23rd";
    DayOfMonthNumber[23] = "24th";
    DayOfMonthNumber[24] = "25th";
    DayOfMonthNumber[25] = "26th";
    DayOfMonthNumber[26] = "27th";
    DayOfMonthNumber[27] = "28th";
    DayOfMonthNumber[28] = "29th";
    DayOfMonthNumber[29] = "30th";
    DayOfMonthNumber[30] = "31st";
    // var DayOfMonth = DayOfMonthNumber[Time.getDate()];

    //Month variables
    var Month = new Array(11);
    Month[0] = "January";
    Month[1] = "February";
    Month[2] = "March";
    Month[3] = "April";
    Month[4] = "May";
    Month[5] = "June";
    Month[6] = "July";
    Month[7] = "August";
    Month[8] = "September";
    Month[9] = "October";
    Month[10] = "November";
    Month[11] = "December";
    // var Month = DayOfMonthNumber[Time.getDate()];

    //Shortonth variables
    var MonthShort = new Array(11);
    MonthShort[0] = "Jan";
    MonthShort[1] = "Feb";
    MonthShort[2] = "Mar";
    MonthShort[3] = "Apr";
    MonthShort[4] = "May";
    MonthShort[5] = "Jun";
    MonthShort[6] = "Jul";
    MonthShort[7] = "Aug";
    MonthShort[8] = "Sep";
    MonthShort[9] = "Oct";
    MonthShort[10] = "Nov";
    MonthShort[11] = "Dec";



        //Button fade in
        $('#Silhouette').fadeIn(function() {
            $('#CaptionSilhouette').fadeIn(function() {
                $('#Day0').fadeIn(function() {
                    $('#Day1').fadeIn(function() {
                        $('#Day2').fadeIn(function() {
                            $('#Day3').fadeIn(function() {
                                $('#Day4').fadeIn(function() {
                                    $('#Day5').fadeIn(function() {
                                        $('#Day6').fadeIn(function() {
                                            $('#Reset').fadeIn(function() {});
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });

        //Days
        var Weather0 = data.list[0].weather[0].main;
        var Weather1 = data.list[1].weather[0].main;
        var Weather2 = data.list[2].weather[0].main;
        var Weather3 = data.list[3].weather[0].main;
        var Weather4 = data.list[4].weather[0].main;
        var Weather5 = data.list[5].weather[0].main;
        var Weather6 = data.list[6].weather[0].main;

        //Add day of month to buttons
        $('#MonthDay0').html(Weekday[Time.getDay()] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() - 1])
        $('#MonthDay1').html(Weekday[Time.getDay()+1] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() - 0])
        $('#MonthDay2').html(Weekday[Time.getDay()+2] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 1])
        $('#MonthDay3').html(Weekday[Time.getDay()+3] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 2])
        $('#MonthDay4').html(Weekday[Time.getDay()+4] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 3])
        $('#MonthDay5').html(Weekday[Time.getDay()+5] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 4])
        $('#MonthDay6').html(Weekday[Time.getDay()-1] + "<br>" + MonthShort[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 5])

        //Icons
        //ID
        var Day0IconID = data.list[0].weather[0].icon;
        var Day1IconID = data.list[1].weather[0].icon;
        var Day2IconID = data.list[2].weather[0].icon;
        var Day3IconID = data.list[3].weather[0].icon;
        var Day4IconID = data.list[4].weather[0].icon;
        var Day5IconID = data.list[5].weather[0].icon;
        var Day6IconID = data.list[6].weather[0].icon;
        //Create img tag
        var Day0Icon = document.createElement("img");
        var Day1Icon = document.createElement("img");
        var Day2Icon = document.createElement("img");
        var Day3Icon = document.createElement("img");
        var Day4Icon = document.createElement("img");
        var Day5Icon = document.createElement("img");
        var Day6Icon = document.createElement("img");
        //Append icon to button
        document.getElementById("Day0").appendChild(Day0Icon);
        document.getElementById("Day1").appendChild(Day1Icon);
        document.getElementById("Day2").appendChild(Day2Icon);
        document.getElementById("Day3").appendChild(Day3Icon);
        document.getElementById("Day4").appendChild(Day4Icon);
        document.getElementById("Day5").appendChild(Day5Icon);
        document.getElementById("Day6").appendChild(Day6Icon);
        //img source
        Day0Icon.src = 'http://openweathermap.org/img/w/'+Day0IconID+'.png';
        Day1Icon.src = 'http://openweathermap.org/img/w/'+Day1IconID+'.png';
        Day2Icon.src = 'http://openweathermap.org/img/w/'+Day2IconID+'.png';
        Day3Icon.src = 'http://openweathermap.org/img/w/'+Day3IconID+'.png';
        Day4Icon.src = 'http://openweathermap.org/img/w/'+Day4IconID+'.png';
        Day5Icon.src = 'http://openweathermap.org/img/w/'+Day5IconID+'.png';
        Day6Icon.src = 'http://openweathermap.org/img/w/'+Day6IconID+'.png';

        //Raindrops
        //Number of drops
        var nbDrop = 700;

        // function to generate a random number range.
        function randRange(minNum, maxNum) {
            return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
        }

        // function to generate drops
        function createRain() {

            for (i = 1; i < nbDrop; i++) {
                var dropLeft = randRange(0, 1920);
                var dropTop = randRange(-1080, 1080);

                $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
                $('#drop' + i).css('left', dropLeft);
                $('#drop' + i).css('top', dropTop);
            }
        }
        //Make it rain!
        createRain();

        //Let it snow!
        init('Snowfall');

        //Day0
        $('#Day0').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather0);

            $('#BackgroundImage').fadeOut("slow", function() {
                $('#BackgroundImage').removeClass()
                $('#BackgroundImage').addClass(Weather0)
                $('#BackgroundImage').fadeIn()
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Weather').fadeOut("slow", function() {
                $('#Weather').html("Forecast for " + Weekday[Time.getDay()] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() - 1] + " is " + data.list[0].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[0].temp.max)+"°F")
            });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            // $('#Weather').addClass("skew");
            $('#Rainfall').fadeOut("fast")
            if (Weather0 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather0 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Day1
        $('#Day1').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()+1]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather1);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather1)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather1);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")
            $('#Weather').fadeOut("slow", function() {
                $('#Weather').html("Forecast for " + Weekday[Time.getDay()+1] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate()] + " is " + data.list[1].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[1].temp.max)+"°F")
            });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            if (Weather1 == "Rain") {
                $('#Rainfall').fadeIn("fast")

            }
            $('#Snowfall').fadeOut("fast")
            if (Weather1 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });

        //Day2
        $('#Day2').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()+2]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather2);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather0)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather2);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")
            $('#Weather').fadeOut("slow", function() {
                $('#Weather').html("Forecast for " + Weekday[Time.getDay()+2] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 1] + " is " + data.list[2].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[2].temp.max)+"°F")
            });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            if (Weather2 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather2 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Day3
        $('#Day3').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()+3]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather3);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather3)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather3);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")

            $('#Weather')
                .fadeOut("slow", function() {
                    $('#Weather').html("Forecast for " + Weekday[Time.getDay()+3] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 2] + " is " + data.list[3].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[3].temp.max)+"°F")
                });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            if (Weather3 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather3 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Day4
        $('#Day4').on('click', function() {
            console.log("You have selected " + Weekday[4]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather4);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather4)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather4);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")

            $('#Weather')
                .fadeOut("slow", function() {
                    $('#Weather').html("Forecast for " + Weekday[Time.getDay()+4] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 3] + " is " + data.list[4].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[4].temp.max)+"°F")
                });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            if (Weather4 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather4 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Day5
        $('#Day5').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()+5]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather5);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather5)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather5);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")

            $('#Weather')
                .fadeOut("slow", function() {
                    $('#Weather').html("Forecast for " + Weekday[Time.getDay()+5] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 4] + " is " + data.list[5].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[5].temp.max)+"°F")
                });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            console.log(Weather5)
            if (Weather5 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather5 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Day6
        $('#Day6').on('click', function() {
            console.log("You have selected " + Weekday[Time.getDay()-1]);
            $('#Caption').fadeIn("fast")
            $('#CaptionSilhouette').fadeOut("fast")
            $('#BackgroundColor').fadeOut("slow");
            $('#BackgroundImage2').removeClass();
            $('#BackgroundImage2').addClass(Weather6);
            $('#BackgroundImage').fadeOut("slow", function() {
                $(this).removeClass()
                $(this).addClass(Weather6)
                $(this).fadeIn()
                $('#BackgroundImage2').addClass(Weather6);
            });
            $('#Silhouette').fadeOut("slow")
            $('#Skyline').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")
            $('#Weather')
                .fadeOut("slow", function() {
                    $('#Weather').html("Forecast for " + Weekday[Time.getDay()-1] + ", " + Month[Time.getMonth()] + " " + DayOfMonthNumber[Time.getDate() + 5] + " is " + data.list[6].weather[0].description+".")
                $('#Weather').append("<br>Temperature: "+Math.round(data.list[6].temp.max)+"°F")
                });
            $('#Weather').fadeIn("slow")
            $('#Weather').css('text-align', 'center');
            $('#Rainfall').fadeOut("fast")
            if (Weather6 == "Rain") {
                $('#Rainfall').fadeIn("fast")
            }
            $('#Snowfall').fadeOut("fast")
            if (Weather6 == "Snow") {
                $('#Snowfall').fadeIn("fast")
            }
        });
        //Reset
        $('#Reset').on('click', function() {
            $('#Caption').fadeOut("fast")
            $('#CaptionSilhouette').fadeIn("fast")
            $('#BackgroundColor')
                .removeClass()
                .addClass("yellowBackground").fadeIn()
            $('#BackgroundImage').fadeOut("slow")
            $('#Skyline').fadeOut("slow")
            $('#Silhouette').fadeIn("slow")
            $('#Rainfall').fadeOut("slow")
            $('#Weather').fadeOut("slow")
            $('#BackgroundImage2').removeClass();
            $('#Snowfall').fadeOut("fast")
        });
    });
});

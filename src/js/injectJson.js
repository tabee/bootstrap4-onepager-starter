/**
 * Created by Mario C. Bee on 21.02.2017.
 * @todo filename und path is hardcoded.
 *
 */
$(document).ready(function () {
    var filename = "person.json";
    var path = "data/";
    console.log(path + filename);
    $.ajax({
        dataType: "json",
        url: path + filename,
        success: function (data) {
            //test 1
            $("#name").append(data.name);
            $("#jobTitle").append(data.jobTitle);
            $("#streetAddress").append(data.address.streetAddress);
            $("#postOfficeBoxNumber").append(data.address.postOfficeBoxNumber);
            $("#addressLocality").append(data.address.addressLocality);
            $("#telephone").prop("href", "tel:" + data.telephone);
            $("#telephone").append(data.telephone);
            $("#email").prop("href", "mailto:" + data.email);
            $("#email").append(data.email);
        }
    });
});
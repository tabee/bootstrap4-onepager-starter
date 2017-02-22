/**
 * Injects data from JSON (http://www.schema.org) in your html.
 * The goal is to serve valid microdata for google.
 *
 */
$(document).ready(function () {
    var filename = "person.json";
    var path = "data/";
    $.ajax({
        dataType: "json",
        url: path + filename,
        success: function (data) {
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
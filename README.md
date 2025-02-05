# Employee Iqama and DACO Validity Management System
<br/>
# this projrect for our emplyee id valid checking ..



Project Overview

This project is a web-based application designed to manage and display employee information, specifically focusing on the validity of Iqama and DACO documents. It provides functionalities for viewing, editing, and calculating the remaining validity days of these documents. The project is built using HTML, CSS, JavaScript, jQuery, Tailwind CSS, Bootstrap, and DataTables.

Features

Editable Table: Allows inline editing of DACO and Iqama validity dates.

Automatic Date Calculation: Automatically calculates and displays the remaining days for DACO and Iqama validity.

Date Conversion: Supports both Gregorian and Hijri date formats, converting them to display remaining days correctly.

Responsive Design: Utilizes Tailwind CSS and Bootstrap for a responsive and modern user interface.

DataTables Integration: Enhances table functionalities such as searching, sorting, and pagination.

Technologies Used

HTML5: Markup language for structuring the web page.

CSS3: For styling the application.

Tailwind CSS: Utility-first CSS framework for designing responsive layouts.

Bootstrap 5: Provides additional responsive design and components.

JavaScript: Core scripting language for dynamic functionalities.

jQuery: Simplifies DOM manipulation and event handling.

DataTables: jQuery plugin for advanced interaction with HTML tables.

Font Awesome: For using icons in the application.

Installation and Setup

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd <project-directory>

Open the index.html file in your browser:You can open the file directly or use a local server for better performance.

Usage

View Employee Information:The table lists employees with their name, position, DACO ID, SAP ID, Iqama number, work location, and validity dates.

Edit Validity Dates:Click on the DACO-valid or Iqama-Date cells to edit the dates directly in the table.

Automatic Calculation:Once dates are updated, the system will automatically calculate and display the remaining days in the corresponding columns.

Date Format Support:The application supports both Hijri and Gregorian dates. Hijri dates are converted to Gregorian for accurate calculations.

Code Structure

HTML (index.html): Defines the structure of the page, including the table layout and headers.

CSS (style.css & Tailwind CSS classes): Handles the styling of the page.

JavaScript (script.js): Contains the logic for date conversion and calculation of remaining days.

Bootstrap and DataTables CSS/JS: Integrated for additional styling and functionality.

Key Functionalities

JavaScript Logic for Date Calculation:

$(document).ready(function () {
    function updateDaysRemaining() {
        $(".countdown-daco-expire").each(function () {
            var dacoValidText = $(this).closest("tr").find(".Daco-valid").text();
            var dacoValidDate = new Date(dacoValidText);
            if (isNaN(dacoValidDate.getTime())) {
                $(this).text("N/A").addClass("text-danger").removeClass("text-success");
            } else {
                var currentDate = new Date();
                var diffInMilliseconds = dacoValidDate.getTime() - currentDate.getTime();
                var diffInDays = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
                $(this).text(diffInDays);
                if (diffInDays <= 0) {
                    $(this).addClass("text-danger").removeClass("text-success");
                } else {
                    $(this).addClass("text-success").removeClass("text-danger");
                }
            }
        });

        $(".countdown-iqama-expire").each(function () {
            var iqamaValidText = $(this).closest("tr").find(".iqama-valid").text();

            if (iqamaValidText.toLowerCase().includes('id')) {
                $(this).text("N/A").addClass("text-success").removeClass("text-danger");
            } else {
                var iqamaValidDate = moment(iqamaValidText, 'iYYYY/iM/iD').isValid()
                    ? moment(iqamaValidText, 'iYYYY/iM/iD').toDate()
                    : new Date(iqamaValidText);

                if (isNaN(iqamaValidDate.getTime())) {
                    $(this).text("Saudi").addClass("text-danger").removeClass("text-success");
                } else {
                    var currentDate = new Date();
                    var diffInMilliseconds = iqamaValidDate.getTime() - currentDate.getTime();
                    var diffInDays = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
                    $(this).text(diffInDays);
                    if (diffInDays <= 0) {
                        $(this).addClass("text-danger").removeClass("text-success");
                    } else {
                        $(this).addClass("text-success").removeClass("text-danger");
                    }
                }
            }
        });
    }

    updateDaysRemaining();
});

Contributing

Fork the repository.

Create a new branch: git checkout -b feature-branch

Make your changes and commit: git commit -m 'Add new feature'

Push to the branch: git push origin feature-branch

Create a Pull Request.

License


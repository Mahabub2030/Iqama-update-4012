# Employee Iqama Expiry Tracker

This project is a web-based tool designed to manage and track employee Iqama and DACO expiry dates. It provides a user-friendly interface to input and edit employee data, automatically calculates the remaining days until expiry, and highlights expired documents.

## Features

- **Editable Expiry Dates**: Update DACO and Iqama expiry dates directly in the table.
- **Automatic Calculation**: Calculates the remaining days for both DACO and Iqama expiry dates.
- **Date Validation**: Supports both Arabic (Hijri) and English (Gregorian) date formats.
- **Dynamic Highlighting**: Expired documents are highlighted in red, and valid ones in green.
- **Persistent Data**: Changes persist throughout the session.

## Technologies Used

- **HTML**: Markup structure for the web page.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JavaScript**: For dynamic functionality and calculations.
- **jQuery**: Simplifies DOM manipulation and event handling.
- **Moment.js & Moment Hijri.js**: For date parsing and manipulation.
- **Bootstrap**: Additional styling and responsive design.
- **DataTables**: Enhances the table with features like sorting and pagination.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd employee-expiry-tracker
    ```

3. Open `index.html` in your preferred browser.

## Usage

1. Open the web page.
2. Edit the DACO and Iqama expiry dates directly in the table.
3. The table will automatically update to show the remaining days.
4. Expired dates will be highlighted in red, while valid dates will appear in green.

## Example

| NAME                          | POSITION         | DACO-ID     | DACO-valid | IQAMA-Date | Iqama (Days) | DACO (Days) |
|-------------------------------|------------------|-------------|------------|------------|--------------|-------------|
| Shoeib Abou Zeid Mahmoud Awad | Operation Manager| DMM-02-7825 | 01-Jun-2024| 10-Aug-2024| 5            | -30         |

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact [your-email@example.com].


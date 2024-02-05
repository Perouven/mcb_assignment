Next.js Application Architecture:



Filter Inputs:

Countries and Indicators: Users can specify one or more countries and select specific indicators for analysis.
Year: The analysis is performed for a particular year.
Data Retrieval:

Corruption Perception Index (CPI):
If the selected indicator is CPI, the application fetches data from a JSON file. This JSON file is a cleaned-up version of Excel data provided for this specific indicator.
Other Indicators:
For indicators other than CPI, the application fetches data from the World Bank API. This ensures a dynamic and updated dataset for a wide range of indicators.
Data Insertion:

MongoDB Database:
The retrieved data, whether from the JSON file or the World Bank API, is then inserted into a MongoDB database.
The insertion into the database is conditional – data is inserted only if it is not already present. This ensures data integrity and avoids duplications.
Key Features:
Dynamic Data Sources:

By using both a static JSON file and a dynamic World Bank API, the application accommodates the different natures of data for CPI and other indicators.
MongoDB Integration:

Utilizing MongoDB as the database enables efficient storage and retrieval of data.
The application checks for existing data before inserting, preventing unnecessary duplication.
Filter Flexibility:

Users can customize the analysis by selecting specific countries, indicators, and a target year. This flexibility enhances the application's usability.
Automated Data Fetching:

The application automates the process of fetching data from the World Bank API and the JSON file, ensuring that the dataset is always up-to-date.
Efficiency in Reporting:

The implemented solution addresses the challenge highlighted in the context, enabling faster reactions to changing economic conditions through an automated and efficient reporting process.

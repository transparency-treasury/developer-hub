---
layout: default
title: explore
nav: explore
---

### API Documentation  <a id="page_top"></a>

Each of the areas underneath this section will be organized around a specific dataset access.

The API’s made available on transparency.treasury.gov will expand over time to provide improved access to integrated financial management information.  Your input and feedback is important to us.   

##### Access & Path

Each API below can be accessed through a base path, which should be prepended onto each call.  The base access path for the FIR APIs is:

`https://transparency.treasury.gov/fir/api/v1`

The individual requests are appended to the path, as in:

`https://transparency.treasury.gov/fir/api/v1/download/tror/...`  

The APIs available on transparency.treasury.gov include: 

*	[Treasury Report on Receivables (TROR)](#tror)
*	[Treasury Offset Program (TOP)](#top)
*	[Revenue Collections Management (CIR)](#cir)
*	[Data Registry](#data)

##### Treasury Report on Receivables <a id="tror"></a>

The U.S. Department of the Treasury (Treasury) Report on Receivables and Debt Collection Activities (TROR) is the federal government’s primary means for collecting data on the status of non-tax receivables (delinquent and non-delinquent debt) owed to the United States. 

###### Download TROR Data
Returns the complete TROR data set in CSV, JSON or XML format.

* Access Path
  * `GET https://transparency.treasury.gov/fir/api/v1/download/tror`

* Request Parameters
 * No Parameters

* Output
  * <a target='blank' href='https://transparency.treasury.gov/fir/api/v1/download/tror?apiKey=DEMOKEY&responseFormat=json'>Try it Out !</a>


###### TROR: Collections On Delinquent Debt
Provides access to the Collections on Delinquent Debt data.

* Access Path
  * `GET https://transparency.treasury.gov/fir/api/v1/tror/collectionsondelinquentdebt`

* Request Parameters

| Parameter  | Required |  Default | Format | Description |
| ------------- | -------------| ------------- | -------------| -------------|
| apiKey | Yes | | string | Your developer API key. |
| fiscalYear | No | All Years | YYYY | Selects data for a single fiscal year. |
| Quarter | No | All Quarters | Q (1 - 4) | Selects data for a single fiscal quarter. |
| receivableType | No | All Receivable Types | (1 - 4) | Selects type of receivable data to return.  Allowed values are: 1–All receivable types, 2–Administrative Receivables, 3–Direct Loans, 4–Defaulted Guaranteed Loans |
| responseFormat | No | json | string | Format to receive the result content.  Allowed values are json, xml and csv. |

* Output
  * <a target='blank' href='https://transparency.treasury.gov/fir/api/v1/tror/collectionsondelinquentdebt?apiKey=DEMOKEY'>Try it Out !</a>



[Top](#top)

##### Treasury Offset Program (TOP) <a id="top"></a>

The U.S. Department of the Treasury (Treasury) Bureau of the Fiscal Service (Fiscal Service) helps maximize delinquent debt recovery efforts through the Treasury Offset Program (TOP). The Treasury performs this function on behalf of the states as authorized by the Debt Collection Improvement Act of 1996 and other legal authorities.

[Top](#top)

##### Revenue Collections Management (CIR) <a id="cir"></a>

The Bureau of the Fiscal Service (Fiscal Service) administers the world’s largest government funds collections system through a network of more than 10,000 financial institutions. The bureau collects federal revenues, such as individual and corporate income tax deposits, customs duties, fees for government service, fines, and loan repayments.

[Top](#top)

##### Data Registry <a id="data"></a>

The purpose of the Fiscal Service Data Registry is to promote the common identification, use and sharing of data/information across the federal government. The registry contains information about definitions, authoritative sources, data types, formats and uses of common data. Responsibility for establishing and maintaining the Fiscal Service Data Registry and data-related standards falls under the Fiscal Service Enterprise Architecture Team.

[Top](#top)

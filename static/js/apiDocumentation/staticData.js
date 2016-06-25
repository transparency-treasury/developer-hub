(function(){
	'use strict'

	function staticDataStore(){
		function get(){
			return ramlCode.data;
		}

		function set(parent, key, value){
			if (!parent){
				parent = 'default';
			}

			if (!ramlCode.data[parent]){
				ramlCode.data[parent] = {};
				ramlCode.data[parent][key] = value;
			} else{
				ramlCode.data[parent][key] = value;
			}
		}

		function dataFactory(){}

		dataFactory.prototype.get = get;
		dataFactory.prototype.set = set; 

		return new dataFactory
	}

	ramlCode.methods['staticDataStore'] = staticDataStore();

	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"Treasury Report on Receivables"', "The Treasury's Report on Receivables and Debt Collection Activities (TROR) is the federal government's primary means for collecting data on the status of non-tax receivables (delinquent and" +
        " non-delinquent debt) owed to the United States.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"Treasury Offset Program"', "The Bureau of the Fiscal Service helps maximize delinquent debt recovery efforts on behalf of the states and federal agencies through the Treasury Offset Program (TOP).");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Debt to the Penny"', "Debt to the Penny is the total public debt outstanding reported daily. The debt to the penny is made up of intragovernmental holdings and debt held by the public, including securities issued by the U.S. Treasury. U.S. Treasury securities primarily consist of marketable Treasury securities (bills, notes and bonds), savings bonds and special securities issued to state and local governments.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Gold Reserve"', "The Status Report of U.S. Government Gold Reserve (Gold Report): Reflects gold bullion and gold coins owned by the federal government.  The report summarizes the fine troy ounces and the book value of gold held by various facilities and identifies the value of gold coins and bullion on display at Federal Reserve banks; coins and bullion in reserve at the Federal Reserve Bank of New York; and gold" +
        " held by U.S. Mint facilities.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-FIP Rates and Prices"', "The daily pricing file provides current market prices for investments (short, buy, or mean), redemptions (cover, sell, or bid) and end of day portfolio valuations.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-SLGS Statistics"', "Current Month Balances for Securities Outstanding and Principal Outstanding for SLGS. Monthly SLGS Statistics Elements.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Debt Outstanding"', "Annual Debt Outstanding" +
        " from 1790 to the most complete fiscal year.");
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Exchange Rates"', "This report provides  exchange rate information  under Section 613 of Public Law 87-195 (codified at 22 USC 2363(b)) which gives the Secretary of the Treasury sole authority to establish the exchange rates for all foreign currencies or credits reported by all agencies of the government. The primary purpose is to ensure that foreign currency reports prepared by agencies are consistent with regularly published Treasury foreign currency reports regarding amounts stated in foreign currency units and U.S. dollar equivalents. This covers all foreign currencies in which the U.S. government has an interest, including receipts and disbursements, accrued revenues and expenditures, authorizations, obligations, receivables and payables, refunds, and similar" +
        " reverse transaction items.");
    ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"Open Data"', "The Bureau of the Fiscal Service's vision is to help transform financial management in the Federal Government. Fiscal Service's vision aligns with Office of Management and Budget (OMB) guidance for Open Data. The Open Data listing supports this effort by presenting government financial data to the public in a human searchable and machine readable format.");

    ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"accounting"', "The Bureau of the Fiscal Service (Fiscal Service) has the critical responsibility of maintaining the federal government’s set of accounts and serving the repository of information about the financial position of the United States government. The bureau closely monitors the government’s monetary assets and liabilities at all times through its oversight of central accounting and reporting systems.");

    ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"debt"', "")

	ramlCode.methods.staticDataStore.set('staticOffLineData', 'prodOffLineData', 
		{
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/tfm/top/federal_collections?raml" : 'federal_collections_tfm.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/tfm/top/state_programs?raml": 'state_programs_tfm.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/top/state_programs?raml": 'state_programs.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/top/federal_collections?raml": 'federal_collections.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_delinquent_debt?raml": 'analytics_delinquent_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_delinquent_debt_vs_receivables?raml":'analytics_delinquent_debt_vs_receivables.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_receivable_accruals_additional_receivables?raml":'analytics_receivable_accruals_additional_receivables.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/cnc_debt?raml":'cnc_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/collections_on_delinquent_debt?raml":'collections_on_delinquent_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/credit_bureau_reporting?raml":'credit_bureau_reporting.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/referral_to_top?raml":'referral_to_top.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/1099-c?raml":'1099-c.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/delinquent_debt?raml":'delinquent_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/two_years_delinquent?raml":'two_years_delinquent.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_write_off?raml":'analytics_write_off.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_collections_vs_receivables?raml":'analytics_collections_vs_receivables.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_collections_on_receivables?raml":'analytics_collections_on_receivables.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_collection_delinquent_debt?raml":'analytics_collection_delinquent_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_cnc_debt?raml":'analytics_cnc_debt.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_referral_to_treasury?raml":'analytics_referral_to_treasury.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/debt/tror/analytics_delinquent_debt_age?raml":'analytics_delinquent_debt_age.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_to_penny?raml":'debt_to_penny.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/gold_reserve?raml":'gold_reserve.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/exchange_rates?raml": 'exchange_rates.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/debt_outstanding?raml": 'debt_outstanding.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/slgs_statistics?raml": 'slgs_statistics.raml',
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/fip_rates_prices?raml": 'fip_rates_prices.raml'
		}
	);
})();
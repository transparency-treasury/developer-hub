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

	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"Treasury Report on Receivables"', "The Treasury's Report on Receivables and Debt Collection Activities (TROR) is the federal government's primary means for collecting data on the status of non-tax receivables (delinquent and non-delinquent debt) owed to the United States.")
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"Treasury Offset Program"', "The Bureau of the Fiscal Service helps maximize delinquent debt recovery efforts on behalf of the states and federal agencies through the Treasury Offset Program (TOP).")
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Debt to the Penny"', "Debt to the Penny is the total public debt to the public reported daily. Public debt is made up as public debt securities issued by the U.S. Treasury. U.S. Treasury securities primarily consist of marketable Treasury securities (bills, notes and bonds), savings bonds and special securities issued to state and local governments.")
	ramlCode.methods.staticDataStore.set('staticApiDescriptions', '"OD-Gold Reserve"', "The Status Report of U.S. Government Gold Reserve (Gold Report) reflects gold bullion and gold coins owned by the federal government. The report summarizes the fine troy ounces and the book value of gold held by various facilities as well as identifies the value of gold coins and bullion on display at Federal Reserve banks; coins and bullion in reserve at the Federal Reserve Bank of New York and gold held by U.S. Mint facilities.")

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
			"https://api.transparency.treasury.gov/services/api/fiscal_service/v1/accounting/od/gold_reserve?raml":'gold_reserve.raml'
		}
	)
})();
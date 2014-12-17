module.exports = function(bbscaff){
	bbscaff.prompt([
	{
		name: 'name',
		message: 'Portal Name'
	},
	{
		name: 'versioning_enabled',
		message: 'Versioning enabled? (true/false)',
		'default': 'false'
	},
	{
		name: 'auditing_enabled',
		message: 'Auditing enabled? (true/false)',
		'default': 'false'
	},
	{
		name: 'ptc_profile',
		message: 'PTC profile? (ptc-local/ptc-remote)',
		'default': 'ptc-local'

	},
	{
		name: 'editorial_ps_address',
		message: 'Editorial Portal Server address?',
		'default': 'localhost'
	},
	{
		name: 'editorial_ps_port',
		message: 'Editorial Portal Server port?',
		'default': '8080'
	},
	{
		name: 'staging_ps_address',
		message: 'Staging Portal Server address?',
		'default': 'localhost'
	},
	{
		name: 'staging_ps_port',
		message: 'Staging Portal Server port?',
		'default': '8080'
	},
	{
		name: 'live_ps_address',
		message: 'Live Portal Server address?',
		'default': 'localhost'
	},
	{
		name: 'live_ps_port',
		message: 'Live Portal Server port?',
		'default': '8080'
	},
	{
		name: 'editorial_orchestrator_address',
		message: 'Editorial Orchestrator address?',
		'default': function(answers){
			return answers.editorial_ps_address
		}
	},
	{
		name: 'editorial_orchestrator_port',
		message: 'Editorial Orchestrator port?',
		'default': function(answers){
			return answers.editorial_ps_port
		}
	},
	{
		name: 'staging_orchestrator_address',
		message: 'Staging Orchestrator address?',
		'default': function(answers){
			return answers.staging_ps_address
		}
	},
	{
		name: 'staging_orchestrator_port',
		message: 'Staging Orchestrator port?',
		'default': function(answers){
			return answers.staging_ps_port
		}
	},
	{
		name: 'live_orchestrator_address',
		message: 'Live Orchestrator address?',
		'default': function(answers){
			return answers.live_ps_address
		}
	},
	{
		name: 'live_orchestrator_port',
		message: 'Live Orchestrator port?',
		'default': function(answers){
			return answers.live_ps_port
		}
	},
	{
		name: 'editorial_cs_address',
		message: 'Editorial Content Services address?',
		'default': function(answers){
			return answers.editorial_orchestrator_address
		}
	},
	{
		name: 'editorial_cs_port',
		message: 'Editorial Content Services port?',
		'default': function(answers){
			return answers.editorial_orchestrator_port
		}
	},
	{
		name: 'staging_cs_address',
		message: 'Staging Content Services address?',
		'default': function(answers){
			return answers.staging_orchestrator_address
		}
	},
	{
		name: 'staging_cs_port',
		message: 'Staging Content Services port?',
		'default': function(answers){
			return answers.staging_orchestrator_port
		}
	},
	{
		name: 'live_cs_address',
		message: 'Live Content Services address?',
		'default': function(answers){
			return answers.live_orchestrator_address
		}
	},
	{
		name: 'live_cs_port',
		message: 'Live Content Services port?',
		'default': function(answers){
			return answers.live_orchestrator_port
		}
	},
	{
		name: 'database_vendor',
		message: 'Which database vendor? (h2,sqlserver,mysql,oracle,db2)',
		'default': 'h2'
	},
	{
		name: 'cs_base_file_location',
		message: 'Base folder for Content Services data?',
		'default':'/home/backbase/contentservices'
		
	},
	{
		name: 'logging_config_path',
		message: 'Path to logback.xml?',
		'default':'/home/backbase/logback.xml'
	},
	{
		name: 'orchestrator_base_file_location',
		message: 'Orchestrator Base data Path?',
		'default':'/home/backbase/orchestrator'
		
	},
	{
		name: 'orchestrator_config_location',
		message: 'Path to Orchestrator configuration file?',
		'default': function(answers){
			return answers.orchestrator_base_file_location+'/editorial-publishchains.xml'
		}
	}
	,
	{
		name: 'launchpad_themePath',
		message: 'Launchpad theme Path?',
		'default':'/launchpad-theme/themes'
	},
	{
		name: 'launchpad_bundles',
		message: 'Launchpad bundles?',
		'default': function(answers){
			return 'launchpad,'+answers.name
		}
		
	}
	], function(answers){
		bbscaff.generate(answers, answers.name)
	})
}
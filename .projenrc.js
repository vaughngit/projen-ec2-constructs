const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'VaughnTech',
  authorAddress: 'alvin.vaughn@outlook.com',
  cdkVersion: '2.59.0',
  defaultReleaseBranch: 'main',
  name: 'projen-ec2-constructs',
  repositoryUrl: 'https://github.com/awsalvin/projen-ec2-constructs.git',
  description: 'CDK construct to create AWS EC2 Instances',
  autoApproveOptions: {
    allowedUsernames: ['github-bot', 'vaughngit', 'github-actions'],
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  license: 'MIT-0',
  releaseToNpm: false,
  //   packageName: 'vaughntech-nodejs-lambda-construct',
  //  description: 'AWS Node.js Lambda functions baselined with powertool powered tracing, structured logging, custom metrics, and cloudwatch dashboards to help visualize
  // publishToNuget: {
  //   dotNetNamespace: 'VaughnTech.CDK',
  //   packageId: 'VaughnTech.CDK.NodeJsLambdaConstruct',
  // },
  // publishToPypi: {
  //   distName: 'cdk-backup-plan',
  //   module: 'cdk_backup_plan',
  // },
  gitpod: true,
});

//project.gitignore.addPatterns('cdk.out');
project.npmignore.addPatterns('cdk.out', 'examples', 'misc', 'gitpod_scripts');

project.gitpod.addCustomTask({
  init: 'yarn install && yarn run build',
  command: 'yarn run watch',
});

// project.gitpod.addCustomTask({
//   name: 'ConfigAlias',
//   command: 'echo \'alias pj="npx projen"\' >> ~/.bashrc && echo \'alias cdk="npx cdk"\' >> ~/.bashrc',
// });

project.gitpod.addCustomTask({
  name: 'ConfigCDK',
  command: 'npm install -g aws-cdk',
});


project.gitpod.addCustomTask({
  name: 'Initialize & Configure AWS',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_aws.sh',
});

project.gitpod.addCustomTask({
  name: 'Install DOTNET 6.0',
  command: 'bash $GITPOD_REPO_ROOT/gitpod_scripts/gitpod_configure_dotnet.sh',
});

project.gitpod.addVscodeExtensions(
  'ms-azuretools.vscode-docker',
  'AmazonWebServices.aws-toolkit-vscode',
);

project.synth();
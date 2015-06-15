var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
      name: "appname",
      message: "What's the name of your project?",
      default: this.appname
    }, {
      type: "checkbox",
      name: "features",
      message: "What more to add?",
      choices: [
        {name: "AngularJS", value: "includeAngular", checked: true}
      ]
    }];

    this.prompt(prompts, function (answers) {
      this.context = {};
      this.context.appname = answers.appname;
      this.context.includeAngular = answers.features.indexOf("includeAngular") > 0;

      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"), this.context);
    this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"), this.context);
  }
});

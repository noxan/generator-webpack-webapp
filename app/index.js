var generators = require('yeoman-generator');


module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [{
      name: "appname",
      message: "What's the name of your project?",
      default: this.appname
    }, {
      message: "Describe your project",
      name: "description",
      default: "Awesome webapp build with webpack."
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
      this.context.description = answers.description;
      this.context.includeAngular = answers.features.indexOf("includeAngular") >= 0;

      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(this.templatePath("README.md"), this.destinationPath("README.md"), this.context);
    this.fs.copyTpl(this.templatePath("package.json"), this.destinationPath("package.json"), this.context);

    this.fs.copy(this.templatePath("webpack.config.js"), this.destinationPath("webpack.config.js"));
    this.fs.copy(this.templatePath("_jscsrc"), this.destinationPath(".jscsrc"));

    this.fs.copy(this.templatePath("src/app.js"), this.destinationPath("src/app.js"));
    this.fs.copy(this.templatePath("src/main.styl"), this.destinationPath("src/main.styl"));
    this.fs.copyTpl(this.templatePath("src/index.html.jade"), this.destinationPath("src/index.html.jade"), this.context);
  },
  install: function () {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
});

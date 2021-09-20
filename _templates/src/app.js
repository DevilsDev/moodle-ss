app.use(express.static("public"));
app.set("view engine", "ejs");

// Use routes
app.use("/", homeRouter);
app.use("/contact", contactRouter);

module.exports = app;
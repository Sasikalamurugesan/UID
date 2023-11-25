const App = () => {
    return (
      <BrowserRouter>
        <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
          <Header />
          <Switch>
            <Route path="/services" component={Services} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Hero />
          <Appointment />
          <Prices />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
  

function Form() {
     return (
          <section className="form">
               <div className="form-content">
                    <h2>Get notified when we update!</h2>
                    <p>Get notified when we add new items to our special menu, <br />
                    update our price list to have promos !</p>
               </div>
               <form className="form-ori" onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" placeholder="francistrix@gmail.com" />
                    <button type="submit" >Get notified</button>
               </form>
          </section>
     )
}

export default Form;
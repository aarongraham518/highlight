import React, {Component} from 'react';
import Input from './components/common/input';
import './App.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import {Route,Redirect, Switch} from 'react-router-dom';
import en from './lang/en';
import es from './lang/es';
import ThankYou from './thankyou';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('en');

class App extends Component {
    state = {
        lang: 'en',
        account: {
            fileName: '',  
            cityOrTown1: '',
            cityOrTown2: '',
            country1: '',
            country2: '',
            inCareOfName: '',
            streetNumberAndName: '',
            state: '',
            zipCode: '',
            postalCode: '',
            province: '',
            daytimeNumber: ''
        },
        accountCheckBoxes:{
            oneTrip: false, 
            multipleTrip: false,
            partTwoAddress: false,
            partSevenAddress: false,
        }                   
    }

    onLangChange = e => {
        this.setState({lang: e.target.value})
        counterpart.setLocale(e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault();         
        localStorage.removeItem('checkboxes');
        localStorage.removeItem('accountData');  
        console.log("Items Cleared from localStorage..."); 
        this.setState({account: {}, accountCheckBoxes: {}}) 
        window.location.reload(false) // <-- I know              
    };

    handleCheckboxChanges = ({target: input}) => {
        const accountCheckBoxes = {...this.state.accountCheckBoxes}

        accountCheckBoxes[input.name] = input.checked;

        this.setState({accountCheckBoxes});

        let storedCheckboxes = localStorage.setItem('checkboxes', JSON.stringify(accountCheckBoxes));

    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}

        account[input.name] = input.value;
        // console.log(account[input.name], " this is a test")
        this.setState({account});

        let stored = localStorage.setItem('accountData', JSON.stringify(account));
    };
    render() {
        let data = JSON.parse(localStorage.getItem('accountData'));
        let checkboxes = JSON.parse(localStorage.getItem('checkboxes'));

        let {account, accountCheckBoxes } = this.state;

        return (
<form 
    onSubmit={this.handleSubmit}
    className="highlightContainer form-row"
>
    <div className="form-group col-md-12">     
    <select className="languageSelector" value={this.state.lang} onChange={this.onLangChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
    </select>
    <span> Choose Language/Elige lengua</span>
    <Translate content="h1" component="h1"/> 
    </div> 

  <div className="leftSide col-md-6">
    <div className="form-group col-md-12 depSpacing">
    <Translate content="main" component="p"/>

        <div className="form-group">
            <input 
                name="fileName" 
                type="file" 
                className="form-control-file" 
                id="exampleFormControlFile1"
                onChange={this.handleChange}
            />
        </div>
    </div> 

    <div className="form-check depSpacing">
    <Translate className="form-check-inline depSpacing" content="one" component="p"/>        
        <div className="form-check form-check-inline">
            <input 
                name="oneTrip" 
                className="form-check-input"  
                type="checkbox" 
                id="inlineCheckbox1" 
                checked={checkboxes?.oneTrip}
                onChange={this.handleCheckboxChanges}
                // checked={(data.oneTrip || this.state.account.oneTrip === '') ? true : false} 
            />
    <Translate className="form-check-label" htmlFor="inlineCheckbox1" content="two" component="label"/>
    </div>
        <div className="form-check form-check-inline">
            <input 
                name="multipleTrip" 
                className="form-check-input" 
                type="checkbox" 
                id="inlineCheckbox2"  
                checked={checkboxes?.multipleTrip}              
                onChange={this.handleCheckboxChanges}     
            />
    <Translate className="form-check-label" htmlFor="inlineCheckbox2" content="three" component="label"/>        </div>
    </div>  

    <div className="form-group col-md-12">
        <Translate content="four" component="p"/>
    </div> 

    <div className="form-group col-md-11 depSpacing">
    <Translate className="form-check-label" htmlFor="inputAddress" content="five" component="label"/>        

        <input 
            type="text"     
            name="cityOrTown1" 
            className="form-control" 
            id="inputAddress" 
            placeholder=""
            onChange={this.handleChange}
            // value={data.cityOrTown1? || account.cityOrTown1 ? '' : ''}
            value={account.cityOrTown1 ? account.cityOrTown1 : data?.cityOrTown1}
        />
    </div>

    <div className="form-group col-md-11 depSpacing">
    <Translate className="form-check-label" htmlFor="inputAddress" content="six" component="label"/>        
    <input 
        name="country1" 
        type="text" 
        className="form-control" 
        id="inputAddress" 
        placeholder=""
        onChange={this.handleChange}
        value={account.country1 ? account.country1 : data?.country1}
    />
    </div>

    <div className="form-group col-md-12 depSpacing">
        <Translate className="form-check-inline depSpacing" content="seven" component="p"/>
    </div> 

    <div className="form-group col-md-12">
        <div className="form-check form-check-inline">
            <input 
                name="partTwoAddress" 
                className="form-check-input" 
                type="checkbox" 
                id="inlineCheckbox3" 
                checked={checkboxes?.partTwoAddress}
                onChange={this.handleCheckboxChanges}
            />
        <Translate className="form-check-label" htmlFor="inlineCheckbox3" content="eight" component="label"/>        

        </div>
        <div className="form-check form-check-inline">
            <input 
                name="partSevenAddress" 
                className="form-check-input" 
                type="checkbox" 
                id="inlineCheckbox4" 
                checked={checkboxes?.partSevenAddress}
                onChange={this.handleCheckboxChanges}
            />
        <Translate className="form-check-label" htmlFor="inlineCheckbox4" content="nine" component="label"/>        
        </div>
    </div>    

  </div>
  {/*end left side*/}

  {/*start right side*/}
  <div className="rightSide col-md-6">
    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="ten" component="label"/>
        <input 
            name="inCareOfName"
            type="text" 
            className="form-control" 
            id="inputEmail4" 
            placeholder=""
            onChange={this.handleChange}
            value={account.inCareOfName ? account.inCareOfName : data?.inCareOfName}

        />
    </div>

    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="eleven" component="label"/>
    <input 
        name="streetNumberAndName"
        type="text" 
        className="form-control" 
        id="inputEmail4" 
        placeholder="22 Example Str Apt#12 2nd flr"
        onChange={this.handleChange}
        value={account.streetNumberAndName ? account.streetNumberAndName : data?.streetNumberAndName}
      />
    </div>

    
    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="twelve" component="label"/>
       <input 
            name="cityOrTown2"
            type="text" 
            className="form-control" 
            id="inputEmail4" 
            placeholder=""
            onChange={this.handleChange}
            value={account.cityOrTown2 ? account.cityOrTown2 : data?.cityOrTown2}
        />
    </div>
    <div className="form-row col-md-11">

    <div className="form-group col-md-4">
            <select 
                className="custom-select" 
                name="state" 
                onChange={this.handleChange} 
                value={account.state ? account.state : data?.state}
            >
                <option defaultValue>State/Expresar</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>

        <div className="form-group col-md-8">
            <input
                name="zipCode" 
                type="text" 
                className="form-control" 
                id="inputEmail4" 
                placeholder="ZIP Code / Código postal"
                onChange={this.handleChange}
                value={account.zipCode ? account.zipCode : data?.zipCode}
            />
        </div>

    </div>

    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="thirteen" component="label"/>

        <input 
            name="postalCode"
            type="text" 
            className="form-control" 
            id="inputEmail4" 
            placeholder=""
            onChange={this.handleChange}
            value={account.postalCode ? account.postalCode : data?.postalCode}
        />
    </div>

    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="fourteen" component="label"/>
        <input 
            name="province"
            type="text" 
            className="form-control" 
            id="inputEmail4"
            placeholder=""
            onChange={this.handleChange}
            value={account.province ? account.province : data?.province}
        />
    </div>

    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="fifteen" component="label"/>
        <input 
            name="country2" 
            type="text" 
            className="form-control" 
            id="inputEmail4" 
            placeholder=""
            onChange={this.handleChange}
            value={account.country2 ? account.country2 : data?.country2}
        />
    </div>

    <div className="form-group col-md-11">
    <Translate className="form-check-label" htmlFor="inputEmail4" content="sixteen" component="label"/>
        <input 
            name="daytimeNumber" 
            type="number" 
            className="form-control" 
            id="inputEmail4" 
            placeholder=""
            onChange={this.handleChange}
            value={account.daytimeNumber ? account.daytimeNumber : data?.daytimeNumber}
        />
    </div>  

    <div className="form-group col-md-12">
    <button  
        className="btn btn-primary col-md-6 highlightButton"
        onClick={this.handleSubmit} >
            Submit
        </button>
    </div>
    
  </div>
  
</form>   
        );
    }
}

export default App;
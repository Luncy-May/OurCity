import React, { useState } from 'react'
import Drag from './Drag'
import List from './List'

const ExpensePlan = () => {
    // Housing State
    const [mortgage, setMortgage] = useState(0)
    const [propertyTaxes, setPropertyTaxes] = useState(0)
    const [householdRepairs, setHouseholdRepairs] = useState(0)
    const [hoaFees, setHoaFees] = useState(0)

    // Transportation State
    const [carPayment, setCarPayment] = useState(0)
    const [carWarranty, setCarWarranty] = useState(0)
    const [gas, setGas] = useState(0)
    const [tires, setTires] = useState(0)
    const [maintenance, setMaintenance] = useState(0)
    const [parkingFees, setParkingFees] = useState(0)
    const [repairs, setRepairs] = useState(0)
    const [registrationFees, setRegistrationFees] = useState(0)

    // Food State
    const [groceries, setGroceries] = useState(0)
    const [restaurants, setRestaurants] = useState(0)
    const [petFood, setPetFood] = useState(0)

    // Utilities State
    const [electricity, setElectricity] = useState(0)
    const [water, setWater] = useState(0)
    const [garbage, setGarbage] = useState(0)
    const [phones, setPhones] = useState(0)
    const [cable, setCable] = useState(0)
    const [internet, setInternet] = useState(0)

    // Clothing State
    const [adultsClothing, setAdultsClothing] = useState(0)
    const [adultsShoes, setAdultsShoes] = useState(0)
    const [childrenClothing, setChildrenClothing] = useState(0)
    const [childrenShoes, setChildrenShoes] = useState(0)

    // Medical/Healthcare State
    const [primaryCare, setPrimaryCare] = useState(0)
    const [dentalCare, setDentalCare] = useState(0)
    const [specialtyCare, setSpecialtyCare] = useState(0)
    const [urgentCare, setUrgentCare] = useState(0)
    const [medications, setMedications] = useState(0)
    const [medicalDevices, setMedicalDevices] = useState(0)

    // Insurance State
    const [healthInsurance, setHealthInsurance] = useState(0)
    const [homeInsurance, setHomeInsurance] = useState(0)
    const [homeWarranty, setHomeWarranty] = useState(0)
    const [autoInsurance, setAutoInsurance] = useState(0)
    const [lifeInsurance, setLifeInsurance] = useState(0)
    const [disabilityInsurance, setDisabilityInsurance] = useState(0)

    // Household Items/Supplies State
    const [toiletries, setToiletries] = useState(0)
    const [laundryDetergent, setLaundryDetergent] = useState(0)
    const [dishwasherDetergent, setDishwasherDetergent] = useState(0)
    const [cleaningSupplies, setCleaningSupplies] = useState(0)
    const [tools, setTools] = useState(0)

    // Personal State
    const [gymMembership, setGymMembership] = useState(0)
    const [haircuts, setHaircuts] = useState(0)
    const [salonServices, setSalonServices] = useState(0)
    const [cosmetics, setCosmetics] = useState(0)
    const [babysitter, setBabysitter] = useState(0)
    const [subscriptions, setSubscriptions] = useState(0)

    // Debt State
    const [personalLoans, setPersonalLoans] = useState(0)
    const [studentLoans, setStudentLoans] = useState(0)
    const [creditCards, setCreditCards] = useState(0)

    // Retirement State
    const [financialPlanning, setFinancialPlanning] = useState(0)
    const [investing, setInvesting] = useState(0)

    // Education State
    const [childrensCollege, setChildrensCollege] = useState(0)
    const [yourCollege, setYourCollege] = useState(0)
    const [schoolSupplies, setSchoolSupplies] = useState(0)
    const [books, setBooks] = useState(0)

    // Savings State
    const [emergencyFund, setEmergencyFund] = useState(0)
    const [bigPurchases, setBigPurchases] = useState(0)
    const [otherSavings, setOtherSavings] = useState(0)

    // Gifts/Donations State
    const [birthday, setBirthday] = useState(0)
    const [anniversary, setAnniversary] = useState(0)
    const [wedding, setWedding] = useState(0)
    const [christmas, setChristmas] = useState(0)
    const [specialOccasion, setSpecialOccasion] = useState(0)
    const [charities, setCharities] = useState(0)

    // Entertainment State
    const [alcoholBars, setAlcoholBars] = useState(0)
    const [games, setGames] = useState(0)
    const [movies, setMovies] = useState(0)
    const [concerts, setConcerts] = useState(0)
    const [vacations, setVacations] = useState(0)
    const [entertainmentSubscriptions, setEntertainmentSubscriptions] = useState(0)

    const [list, setList] = useState([])
    const getList = async (e) => {
        e.preventDefault();
        try {
            // Construct the URL with all the parameters from the categories
            const url = `http://localhost:5002/api/getList?mortgage=${mortgage}&propertyTaxes=${propertyTaxes}&householdRepairs=${householdRepairs}&hoaFees=${hoaFees}&carPayment=${carPayment}&carWarranty=${carWarranty}&gas=${gas}&tires=${tires}&maintenance=${maintenance}&parkingFees=${parkingFees}&repairs=${repairs}&registrationFees=${registrationFees}&groceries=${groceries}&restaurants=${restaurants}&petFood=${petFood}&electricity=${electricity}&water=${water}&garbage=${garbage}&phones=${phones}&cable=${cable}&internet=${internet}&adultsClothing=${adultsClothing}&adultsShoes=${adultsShoes}&childrenClothing=${childrenClothing}&childrenShoes=${childrenShoes}&primaryCare=${primaryCare}&dentalCare=${dentalCare}&specialtyCare=${specialtyCare}&urgentCare=${urgentCare}&medications=${medications}&medicalDevices=${medicalDevices}&healthInsurance=${healthInsurance}&homeInsurance=${homeInsurance}&homeWarranty=${homeWarranty}&autoInsurance=${autoInsurance}&lifeInsurance=${lifeInsurance}&disabilityInsurance=${disabilityInsurance}&toiletries=${toiletries}&laundryDetergent=${laundryDetergent}&dishwasherDetergent=${dishwasherDetergent}&cleaningSupplies=${cleaningSupplies}&tools=${tools}&gymMembership=${gymMembership}&haircuts=${haircuts}&salonServices=${salonServices}&cosmetics=${cosmetics}&babysitter=${babysitter}&subscriptions=${subscriptions}&personalLoans=${personalLoans}&studentLoans=${studentLoans}&creditCards=${creditCards}&financialPlanning=${financialPlanning}&investing=${investing}&childrensCollege=${childrensCollege}&yourCollege=${yourCollege}&schoolSupplies=${schoolSupplies}&books=${books}&emergencyFund=${emergencyFund}&bigPurchases=${bigPurchases}&otherSavings=${otherSavings}&birthday=${birthday}&anniversary=${anniversary}&wedding=${wedding}&christmas=${christmas}&specialOccasion=${specialOccasion}&charities=${charities}&alcoholBars=${alcoholBars}&games=${games}&movies=${movies}&concerts=${concerts}&vacations=${vacations}&entertainmentSubscriptions=${entertainmentSubscriptions}`;
    
            const response = await fetch(url);
            const data = await response.json();
            console.log('list');
            console.log(data);
    
            if (response.ok) {
                setList(data.suggestedExpenses);  // Assuming the response contains a 'suggestedExpenses' key
            } else {
                seterrorWeatherMessage("Failed to get list info.");
            }
        } catch (error) {
            seterrorWeatherMessage("An error occurred while fetching list data.");
        }
    }
    

    return (
        <div className="p-5 space-y-5 font-bold items-center justify-center text-xl">
            <div>
                <p className='text-center'>Expense Plan</p>
            </div>
    
            {/* Housing Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Housing</p>
                <div>Mortgage or Rent: {mortgage}<Drag value={mortgage} handleSlide={setMortgage} /></div>
                <div>Property Taxes: {propertyTaxes}<Drag value={propertyTaxes} handleSlide={setPropertyTaxes} /></div>
                <div>Household Repairs: {householdRepairs}<Drag value={householdRepairs} handleSlide={setHouseholdRepairs} /></div>
                <div>HOA Fees: {hoaFees}<Drag value={hoaFees} handleSlide={setHoaFees} /></div>
            </div>
    
            {/* Transportation Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Transportation</p>
                <div>Car Payment: {carPayment}<Drag value={carPayment} handleSlide={setCarPayment} /></div>
                <div>Car Warranty: {carWarranty}<Drag value={carWarranty} handleSlide={setCarWarranty} /></div>
                <div>Gas: {gas}<Drag value={gas} handleSlide={setGas} /></div>
                <div>Tires: {tires}<Drag value={tires} handleSlide={setTires} /></div>
                <div>Maintenance & Oil Changes: {maintenance}<Drag value={maintenance} handleSlide={setMaintenance} /></div>
                <div>Parking Fees: {parkingFees}<Drag value={parkingFees} handleSlide={setParkingFees} /></div>
                <div>Repairs: {repairs}<Drag value={repairs} handleSlide={setRepairs} /></div>
                <div>Registration & DMV Fees: {registrationFees}<Drag value={registrationFees} handleSlide={setRegistrationFees} /></div>
            </div>
    
            {/* Food Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Food</p>
                <div>Groceries: {groceries}<Drag value={groceries} handleSlide={setGroceries} /></div>
                <div>Restaurants: {restaurants}<Drag value={restaurants} handleSlide={setRestaurants} /></div>
                <div>Pet Food: {petFood}<Drag value={petFood} handleSlide={setPetFood} /></div>
            </div>
    
            {/* Utilities Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Utilities</p>
                <div>Electricity: {electricity}<Drag value={electricity} handleSlide={setElectricity} /></div>
                <div>Water: {water}<Drag value={water} handleSlide={setWater} /></div>
                <div>Garbage: {garbage}<Drag value={garbage} handleSlide={setGarbage} /></div>
                <div>Phones: {phones}<Drag value={phones} handleSlide={setPhones} /></div>
                <div>Cable: {cable}<Drag value={cable} handleSlide={setCable} /></div>
                <div>Internet: {internet}<Drag value={internet} handleSlide={setInternet} /></div>
            </div>
    
            {/* Clothing Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Clothing</p>
                <div>Adults’ Clothing: {adultsClothing}<Drag value={adultsClothing} handleSlide={setAdultsClothing} /></div>
                <div>Adults’ Shoes: {adultsShoes}<Drag value={adultsShoes} handleSlide={setAdultsShoes} /></div>
                <div>Children’s Clothing: {childrenClothing}<Drag value={childrenClothing} handleSlide={setChildrenClothing} /></div>
                <div>Children’s Shoes: {childrenShoes}<Drag value={childrenShoes} handleSlide={setChildrenShoes} /></div>
            </div>
    
            {/* Medical/Healthcare Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Medical/Healthcare</p>
                <div>Primary Care: {primaryCare}<Drag value={primaryCare} handleSlide={setPrimaryCare} /></div>
                <div>Dental Care: {dentalCare}<Drag value={dentalCare} handleSlide={setDentalCare} /></div>
                <div>Specialty Care: {specialtyCare}<Drag value={specialtyCare} handleSlide={setSpecialtyCare} /></div>
                <div>Urgent Care: {urgentCare}<Drag value={urgentCare} handleSlide={setUrgentCare} /></div>
                <div>Medications: {medications}<Drag value={medications} handleSlide={setMedications} /></div>
                <div>Medical Devices: {medicalDevices}<Drag value={medicalDevices} handleSlide={setMedicalDevices} /></div>
            </div>
    
            {/* Insurance Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Insurance</p>
                <div>Health Insurance: {healthInsurance}<Drag value={healthInsurance} handleSlide={setHealthInsurance} /></div>
                <div>Homeowner’s or Renter’s Insurance: {homeInsurance}<Drag value={homeInsurance} handleSlide={setHomeInsurance} /></div>
                <div>Home Warranty: {homeWarranty}<Drag value={homeWarranty} handleSlide={setHomeWarranty} /></div>
                <div>Auto Insurance: {autoInsurance}<Drag value={autoInsurance} handleSlide={setAutoInsurance} /></div>
                <div>Life Insurance: {lifeInsurance}<Drag value={lifeInsurance} handleSlide={setLifeInsurance} /></div>
                <div>Disability Insurance: {disabilityInsurance}<Drag value={disabilityInsurance} handleSlide={setDisabilityInsurance} /></div>
            </div>
    
            {/* Household Items/Supplies Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Household Items/Supplies</p>
                <div>Toiletries: {toiletries}<Drag value={toiletries} handleSlide={setToiletries} /></div>
                <div>Laundry Detergent: {laundryDetergent}<Drag value={laundryDetergent} handleSlide={setLaundryDetergent} /></div>
                <div>Dishwasher Detergent: {dishwasherDetergent}<Drag value={dishwasherDetergent} handleSlide={setDishwasherDetergent} /></div>
                <div>Cleaning Supplies: {cleaningSupplies}<Drag value={cleaningSupplies} handleSlide={setCleaningSupplies} /></div>
                <div>Tools: {tools}<Drag value={tools} handleSlide={setTools} /></div>
            </div>
    
            {/* Personal Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Personal</p>
                <div>Gym Membership: {gymMembership}<Drag value={gymMembership} handleSlide={setGymMembership} /></div>
                <div>Haircuts: {haircuts}<Drag value={haircuts} handleSlide={setHaircuts} /></div>
                <div>Salon Services: {salonServices}<Drag value={salonServices} handleSlide={setSalonServices} /></div>
                <div>Cosmetics: {cosmetics}<Drag value={cosmetics} handleSlide={setCosmetics} /></div>
                <div>Babysitter: {babysitter}<Drag value={babysitter} handleSlide={setBabysitter} /></div>
                <div>Subscriptions: {subscriptions}<Drag value={subscriptions} handleSlide={setSubscriptions} /></div>
            </div>
    
            {/* Debt Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Debt</p>
                <div>Personal Loans: {personalLoans}<Drag value={personalLoans} handleSlide={setPersonalLoans} /></div>
                <div>Student Loans: {studentLoans}<Drag value={studentLoans} handleSlide={setStudentLoans} /></div>
                <div>Credit Cards: {creditCards}<Drag value={creditCards} handleSlide={setCreditCards} /></div>
            </div>
    
            {/* Retirement Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Retirement</p>
                <div>Financial Planning: {financialPlanning}<Drag value={financialPlanning} handleSlide={setFinancialPlanning} /></div>
                <div>Investing: {investing}<Drag value={investing} handleSlide={setInvesting} /></div>
            </div>
    
            {/* Education Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Education</p>
                <div>Children’s College: {childrensCollege}<Drag value={childrensCollege} handleSlide={setChildrensCollege} /></div>
                <div>Your College: {yourCollege}<Drag value={yourCollege} handleSlide={setYourCollege} /></div>
                <div>School Supplies: {schoolSupplies}<Drag value={schoolSupplies} handleSlide={setSchoolSupplies} /></div>
                <div>Books: {books}<Drag value={books} handleSlide={setBooks} /></div>
            </div>
    
            {/* Savings Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Savings</p>
                <div>Emergency Fund: {emergencyFund}<Drag value={emergencyFund} handleSlide={setEmergencyFund} /></div>
                <div>Big Purchases: {bigPurchases}<Drag value={bigPurchases} handleSlide={setBigPurchases} /></div>
                <div>Other Savings: {otherSavings}<Drag value={otherSavings} handleSlide={setOtherSavings} /></div>
            </div>
    
            {/* Gifts/Donations Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Gifts/Donations</p>
                <div>Birthday: {birthday}<Drag value={birthday} handleSlide={setBirthday} /></div>
                <div>Anniversary: {anniversary}<Drag value={anniversary} handleSlide={setAnniversary} /></div>
                <div>Wedding: {wedding}<Drag value={wedding} handleSlide={setWedding} /></div>
                <div>Christmas: {christmas}<Drag value={christmas} handleSlide={setChristmas} /></div>
                <div>Special Occasion: {specialOccasion}<Drag value={specialOccasion} handleSlide={setSpecialOccasion} /></div>
                <div>Charities: {charities}<Drag value={charities} handleSlide={setCharities} /></div>
            </div>
    
            {/* Entertainment Section */}
            <div className='border border-white shadow-md hover:shadow-2xl p-5'>
                <p>Entertainment</p>
                <div>Alcohol and/or Bars: {alcoholBars}<Drag value={alcoholBars} handleSlide={setAlcoholBars} /></div>
                <div>Games: {games}<Drag value={games} handleSlide={setGames} /></div>
                <div>Movies: {movies}<Drag value={movies} handleSlide={setMovies} /></div>
                <div>Concerts: {concerts}<Drag value={concerts} handleSlide={setConcerts} /></div>
                <div>Vacations: {vacations}<Drag value={vacations} handleSlide={setVacations} /></div>
                <div>Subscriptions (Netflix, Amazon, Hulu, etc.): {entertainmentSubscriptions}<Drag value={entertainmentSubscriptions} handleSlide={setEntertainmentSubscriptions} /></div>
            </div>
    
            {/* Submit Button */}
            <div className='flex justify-center'>
                <form onSubmit={getList}>
                    <button type="submit" className='p-2 border border-white shadow-md hover:shadow-lg'>
                        See Suggestions
                    </button>
                </form>
            </div>
            <List list={list} />
        </div>
    )
    
}

export default ExpensePlan

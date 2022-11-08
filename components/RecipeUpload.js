import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';

export default function RecipeUpload() {
  const recipeInstructionsStyles = css`
    width: 800px;
    height: 300px;
  `;

  const [recipeName, setRecipeName] = useState(false);
  const [almondMeal, setAlmondMeal] = useState('');
  const [almond, setAlmond] = useState('');
  const [amaranth, setAmaranth] = useState('');
  const [apples, setApples] = useState('');
  const [apricots, setApricots] = useState('');
  const [avocados, setAvocados] = useState('');
  const [bananas, setBananas] = useState('');
  const [barley, setBarley] = useState('');
  const [beefChuck, setBeefChuck] = useState('');
  const [beefRibs, setBeefRibs] = useState('');
  const [beefTenderloin, setBeefTenderloin] = useState('');
  const [beefBrisket, setBeefBrisket] = useState('');
  // butter
  // sour cream
  // bacon
  // spring onion
  // feta cheese
  // pumpkin
  // sweet potatoes
  // carrots
  // cucumber
  // red cabbage
  // baking powder
  // creme fraiche
  // mustard
  // salt
  // pepper
  // eggs
  // ketchup
  // milk
  // bay leaves
  // flour
  // nutmeg
  // lasagna sheets
  // olive oil
  // red wine
  // celery
  // white beans
  // white wine
  // kidney beans
  // lemon
  // garlic
  // milk
  // red onions
  // white onions
  // vinegar
  const [buckWheat, setBuckWheat] = useState('');
  const [bulgur, setBulgur] = useState('');
  const [cheese, setCheese] = useState('');
  const [cherries, setCherries] = useState('');
  const [chiaSeeds, setChiaSeeds] = useState('');
  const [chickenBreast, setChickenBreast] = useState('');
  const [chickenLegs, setChickenLegs] = useState('');
  const [chickenThighs, setChickenThighs] = useState('');
  const [chickenWings, setChickenWings] = useState('');
  const [chocolate, setChocolate] = useState('');
  const [coconut, setCoconut] = useState('');
  const [cornFlour, setCornFlour] = useState('');
  const [cornMeal, setcornMeal] = useState('');
  const [duck, setDuck] = useState('');
  const [fish, setFish] = useState('');
  const [groundBeef, setGroundBeef] = useState('');
  const [groundChicken, setGroundChicken] = useState('');
  const [groundPork, setGroundPork] = useState('');
  const [groundTurkey, setGroundTurkey] = useState('');
  const [lamb, setLamb] = useState('');
  const [mangos, setMangos] = useState('');
  const [millet, setMillet] = useState('');
  const [mushrooms, setMushrooms] = useState('');
  const [nectarines, setNectarines] = useState('');
  const [oatFlour, setOatFlour] = useState('');
  const [oats, setOats] = useState('');
  const [peaches, setPeaches] = useState('');
  const [peanutes, setPeanutes] = useState('');
  const [pears, setPears] = useState('');
  const [plums, setPlums] = useState('');
  const [pomegranates, setPomegranates] = useState('');
  const [porkRibs, setporkRibs] = useState('');
  const [porkShoulder, setPorkShoulder] = useState('');
  const [porkTenderloin, setPorkTenderloin] = useState('');
  const [quinoa, setQuinoa] = useState('');
  const [shrimps, setShrimps] = useState('');
  const [sirloin, setSirloin] = useState('');
  const [spelt, setSpelt] = useState('');
  const [steak, setSteak] = useState('');
  const [tapiocaFlour, setTapiocaFlour] = useState('');
  const [turkey, setTurkey] = useState('');
  const [veal, setVeal] = useState('');
  const [venison, setVenison] = useState('');
  const [whiteRiceFlour, setWhiteRiceFlour] = useState('');
  const [wildRice, setWildRice] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h4>Recipe Name</h4>

          <label>
            Title
            <input />
          </label>
        </div>
        <div>
          <h3>Chose Your Ingredients</h3>
          <label>
            Almond Meal
            <input
              type="checkbox"
              value={almondMeal}
              onChange={(event) => {
                setAlmondMeal(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Almond
            <input
              type="checkbox"
              value={almond}
              onChange={(event) => {
                setAlmond(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Amaranth
            <input
              type="checkbox"
              value={amaranth}
              onChange={(event) => {
                setAmaranth(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Apples
            <input
              type="checkbox"
              value={apples}
              onChange={(event) => {
                setApples(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Apricots
            <input
              type="checkbox"
              value={apricots}
              onChange={(event) => {
                setApricots(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Avocados
            <input
              type="checkbox"
              value={avocados}
              onChange={(event) => {
                setAvocados(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Bananas
            <input
              type="checkbox"
              value={bananas}
              onChange={(event) => {
                setBananas(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Barley
            <input
              type="checkbox"
              value={barley}
              onChange={(event) => {
                setBarley(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Beef Chuck
            <input
              type="checkbox"
              value={beefChuck}
              onChange={(event) => {
                setBeefChuck(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Beef Ribs
            <input
              type="checkbox"
              value={beefRibs}
              onChange={(event) => {
                setBeefRibs(event.currentTarget.checked);
              }}
            />
          </label>
          <br />
          <label>
            Beef Tenderloin
            <input
              type="checkbox"
              value={beefTenderloin}
              onChange={(event) => {
                setBeefTenderloin(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Beef Brisket
            <input
              type="checkbox"
              value={beefBrisket}
              onChange={(event) => {
                setBeefBrisket(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Buck Wheat
            <input
              type="checkbox"
              value={buckWheat}
              onChange={(event) => {
                setBuckWheat(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Bulgur
            <input
              type="checkbox"
              value={bulgur}
              onChange={(event) => {
                setBulgur(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Cheese
            <input
              type="checkbox"
              value={cheese}
              onChange={(event) => {
                setCheese(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Cherries
            <input
              type="checkbox"
              value={cherries}
              onChange={(event) => {
                setCherries(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Chia Seeds
            <input
              type="checkbox"
              value={chiaSeeds}
              onChange={(event) => {
                setChiaSeeds(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Chicken Breast
            <input
              type="checkbox"
              value={chickenBreast}
              onChange={(event) => {
                setChickenBreast(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Chicken Legs
            <input
              type="checkbox"
              value={chickenLegs}
              onChange={(event) => {
                setChickenLegs(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Chicken Thighs
            <input
              type="checkbox"
              value={chickenThighs}
              onChange={(event) => {
                setChickenThighs(event.currentTarget.checked);
              }}
            />
          </label>
          <br />
          <label>
            Chicken Wings
            <input
              type="checkbox"
              value={chickenWings}
              onChange={(event) => {
                setChickenWings(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Chocolate
            <input
              type="checkbox"
              value={chocolate}
              onChange={(event) => {
                setChocolate(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Coconut
            <input
              type="checkbox"
              value={coconut}
              onChange={(event) => {
                setCoconut(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Corn Flour
            <input
              type="checkbox"
              value={cornFlour}
              onChange={(event) => {
                setCornFlour(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Corn Meal
            <input
              type="checkbox"
              value={cornMeal}
              onChange={(event) => {
                setcornMeal(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Duck
            <input
              type="checkbox"
              value={duck}
              onChange={(event) => {
                setDuck(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Fish
            <input
              type="checkbox"
              value={fish}
              onChange={(event) => {
                setFish(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Ground Beef
            <input
              type="checkbox"
              value={groundBeef}
              onChange={(event) => {
                setGroundBeef(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Ground Chicken
            <input
              type="checkbox"
              value={groundChicken}
              onChange={(event) => {
                setGroundChicken(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Ground Pork
            <input
              type="checkbox"
              value={groundPork}
              onChange={(event) => {
                setGroundPork(event.currentTarget.checked);
              }}
            />
          </label>
          <br />
          <label>
            Ground Turkey
            <input
              type="checkbox"
              value={groundTurkey}
              onChange={(event) => {
                setGroundTurkey(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Lamb
            <input
              type="checkbox"
              value={lamb}
              onChange={(event) => {
                setLamb(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Mangos
            <input
              type="checkbox"
              value={mangos}
              onChange={(event) => {
                setMangos(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Millet
            <input
              type="checkbox"
              value={millet}
              onChange={(event) => {
                setMillet(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Mushrooms
            <input
              type="checkbox"
              value={mushrooms}
              onChange={(event) => {
                setMushrooms(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Nectarines
            <input
              type="checkbox"
              value={nectarines}
              onChange={(event) => {
                setNectarines(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Oat Flour
            <input
              type="checkbox"
              value={oatFlour}
              onChange={(event) => {
                setOatFlour(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Oats
            <input
              type="checkbox"
              value={oats}
              onChange={(event) => {
                setOats(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Peaches
            <input
              type="checkbox"
              value={peaches}
              onChange={(event) => {
                setPeaches(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Peanutes
            <input
              type="checkbox"
              value={peanutes}
              onChange={(event) => {
                setPeanutes(event.currentTarget.checked);
              }}
            />
          </label>
          <br />
          <label>
            Pears
            <input
              type="checkbox"
              value={pears}
              onChange={(event) => {
                setPears(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Plums
            <input
              type="checkbox"
              value={plums}
              onChange={(event) => {
                setPlums(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Pomegranates
            <input
              type="checkbox"
              value={pomegranates}
              onChange={(event) => {
                setPomegranates(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Pork Ribs
            <input
              type="checkbox"
              value={porkRibs}
              onChange={(event) => {
                setporkRibs(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Pork Shoulder
            <input
              type="checkbox"
              value={porkShoulder}
              onChange={(event) => {
                setPorkShoulder(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Pork Tenderloin
            <input
              type="checkbox"
              value={porkTenderloin}
              onChange={(event) => {
                setPorkTenderloin(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Quinoa
            <input
              type="checkbox"
              value={quinoa}
              onChange={(event) => {
                setQuinoa(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Shrimps
            <input
              type="checkbox"
              value={shrimps}
              onChange={(event) => {
                setShrimps(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Sirloin
            <input
              type="checkbox"
              value={sirloin}
              onChange={(event) => {
                setSirloin(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Spelt
            <input
              type="checkbox"
              value={spelt}
              onChange={(event) => {
                setSpelt(event.currentTarget.checked);
              }}
            />
          </label>
          <br />
          <label>
            Steak
            <input
              type="checkbox"
              value={steak}
              onChange={(event) => {
                setSteak(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Tapioca Flour
            <input
              type="checkbox"
              value={tapiocaFlour}
              onChange={(event) => {
                setTapiocaFlour(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Turkey
            <input
              type="checkbox"
              value={turkey}
              onChange={(event) => {
                setTurkey(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Veal
            <input
              type="checkbox"
              value={veal}
              onChange={(event) => {
                setVeal(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Venison
            <input
              type="checkbox"
              value={venison}
              onChange={(event) => {
                setVenison(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            White Rice Flour
            <input
              type="checkbox"
              value={whiteRiceFlour}
              onChange={(event) => {
                setWhiteRiceFlour(event.currentTarget.checked);
              }}
            />
          </label>
          <label>
            Wild Rice
            <input
              type="checkbox"
              value={wildRice}
              onChange={(event) => {
                setWildRice(event.currentTarget.checked);
              }}
            />
          </label>
          <div>
            <h4>Instruction (max. 1000 chars)</h4>
            <input
              css={recipeInstructionsStyles}
              value={recipeInstructions}
              onChange={(event) => {
                setRecipeInstructions(event.currentTarget.value);
              }}
            />
            {console.log('almondMeal', almondMeal)}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

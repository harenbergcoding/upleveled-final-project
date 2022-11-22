import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UploadImage from '../components/UploadImage';
import getDifficulties from '../database/difficulties';
import getIngredients from '../database/ingredients';
import { getRecipesByUserId } from '../database/recipes';
import { getUserBySessionToken, User } from '../database/users';

type Props = {
  user: User;
  ingredients: Awaited<ReturnType<typeof getIngredients>>;
  difficulties: Awaited<ReturnType<typeof getDifficulties>>;
  userRecipes: Awaited<ReturnType<typeof getRecipesByUserId>>;
};

export default function UserProfile(props: Props) {
  const profileStyles = css`
    margin: 50px 200px 0px;

    span {
      display: block;
      margin-bottom: 20px;
    }
  `;

  const personalInformationStyles = css`
    label {
      display: inline-block;
      border-radius: 4px;
      margin-bottom: 10px;
      font-weight: 500;
    }

    input {
      margin-left: 50px;
      margin-right: 30px;
    }

    button {
      border: 2px solid green;
      display: inline-block;
      border-radius: 4px;
      background-color: white;
      color: green;
    }
    #deleteProfile {
      display: block;
      margin-top: 20px;
      border: red 1px solid;
      border-radius: 4px;
      background-color: white;
      color: red;
      margin-bottom: 30px;
    }
  `;

  const recipeStyles = css`
    h4 {
      margin-top: 40px;
    }
    #ingredients {
      margin-right: 10px;
      margin-bottom: 10px;
    }
    #instructions {
      width: 100%;
      height: 300px;
    }
    button {
      margin-top: 20px;
      border: 2px solid green;
      display: inline-block;
      border-radius: 4px;
      background-color: white;
      color: green;
    }
  `;

  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.eMail);
  const [imageUrl, setImageUrl] = useState('');
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [preparationTime, setPreparationTime] = useState('');
  const [difficulty, setDifficulty] = useState(1);
  const [recipeInstructions, setRecipeInstructions] = useState('');
  const [recipeCreated, setRecipeCreated] = useState(false);
  const [profileInfoUpdated, setProfileInfoUpdated] = useState(false);
  const router = useRouter();
  const userAccountId = props.user.id;

  // selects and filter the ingredients
  function handleCheck(index: never) {
    if (ingredients.includes(index)) {
      const filteredIngredient = ingredients.filter((ingredient) => {
        return ingredient !== index;
      });
      setIngredients(filteredIngredient);
    } else {
      setIngredients([...ingredients, index]);
    }
  }

  // creates recipe

  async function createRecipeFromApiById(userAccountId: number) {
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        recipe: {
          userAccountId: userAccountId,
          titleSelected: recipeTitle,
          preparationTimeSelected: preparationTime,
          imageURL: imageUrl,
          recipeInstructionsSelected: recipeInstructions,
          difficultyId: difficulty,
        },
        recipeIngredients: {
          selectedIngredients: ingredients,
        },
      }),
    });

    const createdRecipeFromApiById = await response.json();
    await router.push(`/recipes/`);
    return;

    console.log('createdRecipeFromApiById', createdRecipeFromApiById);
  }

  if (!props.user) {
    return (
      <>
        <Head>
          <title>User not found</title>
          <meta name="description" content="User not found" />
        </Head>
        <h1>404 - User not found</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Recipe</title>
        <meta
          name="description"
          content="Create tasty recipes and share it with everyone"
        />
      </Head>

      <div css={profileStyles}>
        <div css={recipeStyles}>
          <h2>Share Your Recipes</h2>
          <p>
            Share your recipes in four easy steps and get in touch with
            like-minded cooking lovers!
          </p>
          <div>
            <form
              onSubmit={(event) => {
                return event.preventDefault(), setRecipeCreated(true);
              }}
            >
              <h4 data-test-id={'upload-image'}>1. Upload Image</h4>
              <UploadImage setImageUrl={setImageUrl} />

              <h4>2. Choose a Title</h4>
              <input
                value={recipeTitle}
                onChange={(event) => {
                  setRecipeTitle(event?.currentTarget.value);
                }}
              />
              <div>
                <h4>3. Choose Ingredients</h4>
                {props.ingredients.map((ingredient: any, index: number) => {
                  return (
                    <label key={index}>
                      {ingredient.name}
                      <input
                        id="ingredients"
                        value={ingredient.id}
                        type="checkbox"
                        onChange={() => {
                          handleCheck(index + 1);
                        }}
                      />
                    </label>
                  );
                })}
              </div>
              <h4>4. Preparation Time in minutes</h4>
              <input
                value={preparationTime}
                onChange={(event) => {
                  setPreparationTime(event?.currentTarget.value);
                }}
              />
              <div>
                <h4>5. Select Difficulty</h4>

                <select
                  name="selectList"
                  id="selectList"
                  onChange={(event) => {
                    setDifficulty(event?.target.value);
                  }}
                >
                  {props.difficulties.map((difficulty) => {
                    return (
                      <option value={difficulty.id}>{difficulty.name}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <h4>6. Instruction (max. 1000 chars)</h4>
                <textarea
                  id="instructions"
                  value={recipeInstructions}
                  onChange={(event) => {
                    setRecipeInstructions(event.currentTarget.value);
                  }}
                />
              </div>
              <button
                onClick={async () => {
                  await createRecipeFromApiById(userAccountId);
                }}
              >
                Submit My Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const ingredients = await getIngredients();
  const difficulties = await getDifficulties();
  const token = context.req.cookies.sessionToken;
  const user = token && (await getUserBySessionToken(token));
  const userId = user!.id;
  const userRecipes = await getRecipesByUserId(userId);

  if (!user) {
    return {
      redirect: {
        destination: '/login?returnTo=/private-profile',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: user,
      ingredients: ingredients,
      difficulties: difficulties,
      userRecipes: userRecipes,
    },
  };
}

import "./App.css";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div className="App">
      <Product
        image="https://i.etsystatic.com/38409452/r/il/c01476/4319828016/il_794xN.4319828016_it2f.jpg"
        title="Volkswagen GOLF MK2 2022 Calendar"
        price={(10).toFixed(2)}
        description={
          <div>
            <p>12 unique designs</p>
            <p>All pecies are printed on heavywieght 200 gsm art paper.</p>
            <p>Limited to 50 pieces</p>
            <p>
              One size:
              <br />
              11.7x16.5 inch / (297x420mm)
            </p>
          </div>
        }
        availability={10}
        category="Calendars"
      />
    </div>
  );
};

export default App;

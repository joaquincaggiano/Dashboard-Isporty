import MainBox from "./MainBox";

function MainBoxes(props) {
  const dataBoxes = [
    {
      title: "Products",
      amount: props.product.total,
      iconName: "fa-film",
      styles: ["border-left-primary", "text-primary"]
    },
    {
      title: "Users",
      amount: props.user.total,
      iconName: "fa-award",
      styles: ["border-left-success", "text-success"]
    },
    {
      title: "Brands",
      amount: Object.keys(props.product.countByBrand).length,
      iconName: "fa-user",
      styles: ["border-left-warning", "text-warning"]
    }
  ]

  return (
    // <!-- Content Row Movies-->
    <div className="row">
      {props && dataBoxes.map((dataBox, i) => <MainBox key= {i} dataBox= {dataBox} />)}
    </div>
  );
}

export default MainBoxes;
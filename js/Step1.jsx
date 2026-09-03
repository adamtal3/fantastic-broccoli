export default class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [1, 2, 3]
    };
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <h3>Step 1 - State manipulation</h3>
        <input type="button" value="Clicking here should add a number to the following list:" />
        <ul>{list.map(x => <li>{x}</li>)}</ul>
      </div>);
  }
}
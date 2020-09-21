import React from "react";
import PropTypes from "prop-types";
import data from "./data/usa-map-dimensions";
import USAState from "./components/USAState";
import "./labelstyle.css";

class USAMap extends React.Component {
  clickHandler = stateAbbreviation => {
    this.props.onClick(stateAbbreviation);
  };

  fillStateColor = state => {
    if (
      this.props.customize &&
      this.props.customize[state] &&
      this.props.customize[state].fill
    ) {
      return this.props.customize[state].fill;
    }

    return this.props.defaultFill;
  };

  stateClickHandler = state => {
    if (
      this.props.customize &&
      this.props.customize[state] &&
      this.props.customize[state].clickHandler
    ) {
      return this.props.customize[state].clickHandler;
    }
    return this.clickHandler;
  };

  buildPaths = () => {
    let paths = [];
    for (let stateKey in data) {
      const path = (
        <USAState
          key={stateKey}
          stateName={data[stateKey].name}
          dimensions={data[stateKey]["dimensions"]}
          state={stateKey}
          fill={this.fillStateColor(stateKey)}
          onClickState={this.stateClickHandler(stateKey)}
        />
      );
      paths.push(path);
    }
    return paths;
  };

  render() {
    return (
      <svg
        className="us-state-map"
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 980 593"
      >
        <title>{this.props.title}</title>
        <g className="outlines">
          {this.buildPaths()}
          <g className="DC state">
            <path
              className="DC1"
              fill={this.fillStateColor("DC1")}
              d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z"
            />
            <circle
              className="DC2"
              onClick={this.clickHandler}
              data-name={"DC"}
              fill={this.fillStateColor("DC2")}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              cx="801.3"
              cy="251.8"
              r="5"
              opacity="1"
            />
          </g>
        </g>

        <g id="text" font-family="Helvetica Neue">
          <g font-size="13">
            <text id="AKn" x="110" y="504" class="svgText">
              AK 3
            </text>
            <text id="HIn" x="261" y="565" class="svgText">
              HI 4
            </text>
            <text id="WAn" x="105" y="62" class="svgText">
              WA 12
            </text>
            <text id="ORn" x="88" y="136" class="svgText">
              OR 7
            </text>
            <text id="CAn" x="55" y="298" class="svgText">
              CA 55
            </text>
            <text id="NVn" x="120" y="242" class="svgText">
              NV 6
            </text>
            <text id="AZn" x="182" y="368" class="svgText">
              AZ 11
            </text>
            <text id="UTn" x="209" y="265" class="svgText">
              UT 6
            </text>
            <text id="IDn" x="183" y="162" class="svgText">
              ID 4
            </text>
            <text id="MTn" x="270" y="100" class="svgText">
              MT 3
            </text>
            <text id="WYn" x="290" y="191" class="svgText">
              WY 3
            </text>
            <text id="COn" x="311" y="283" class="svgText">
              CO 9
            </text>
            <text id="NMn" x="290" y="381" class="svgText">
              NM 5
            </text>
            <text id="TXn" x="410" y="458" class="svgText">
              TX 38
            </text>
            <text id="OKn" x="451" y="370" class="svgText">
              OK 7
            </text>
            <text id="KSn" x="434" y="303" class="svgText">
              KS 6
            </text>
            <text id="NEn" x="411" y="232" class="svgText">
              NE 5
            </text>
            <text id="SDn" x="405" y="170" class="svgText">
              SD 3
            </text>
            <text id="NDn" x="405" y="103" class="svgText">
              ND 3
            </text>
            <text id="MNn" x="484" y="129" class="svgText">
              MN 10
            </text>
            <text id="WIn" x="561" y="163" class="svgText">
              WI 10
            </text>
            <text id="ILn" x="579" y="261" class="svgText">
              IL 20
            </text>
            <text id="IAn" x="513" y="224" class="svgText">
              IA 6
            </text>
            <text id="MOn" x="525" y="306" class="svgText">
              MO 10
            </text>
            <text id="ARn" x="534" y="384" class="svgText">
              AR 6
            </text>
            <text id="LAn" x="536" y="452" class="svgText">
              LA 8
            </text>
            <text id="MSn" x="587" y="428" class="svgText">
              MS 6
            </text>
            <text id="ALn" x="641" y="422" class="svgText">
              AL 9
            </text>
            <text id="GAn" x="697" y="419" class="svgText">
              GA 16
            </text>
            <text id="FLn" x="743" y="505" class="svgText">
              FL 29
            </text>
            <text id="SCn" x="745" y="380" class="svgText">
              SC 9
            </text>
            <text id="NCn" x="763" y="342" class="svgText">
              NC 15
            </text>
            <text id="TNn" x="633" y="353" class="svgText">
              TN 11
            </text>
            <text id="KYn" x="666" y="311" class="svgText">
              KY 8
            </text>
            <text id="INn" x="630" y="262" class="svgText">
              IN 11
            </text>
            <text id="MIn" x="645" y="193" class="svgText">
              MI 16
            </text>
            <text id="OHn" x="685" y="248" class="svgText">
              OH 18
            </text>
            <text id="WVn" x="730" y="281" class="svgText">
              WV 5
            </text>
            <text id="VAn" x="767" y="294" class="svgText">
              VA 13
            </text>
            <text id="PAn" x="764" y="220" class="svgText">
              PA 20
            </text>
            <text id="NYn" x="798" y="167" class="svgText">
              NY 29
            </text>
            <text id="MEn" x="884" y="90" class="svgText">
              ME 4
            </text>
          </g>
          <g font-size="14">
            <text id="NHn" x="800" y="58" class="svgText">
              NH 4
            </text>
            <text id="VTn" x="790" y="82" class="svgText">
              VT 3
            </text>
            <text id="MAn" x="927" y="164" class="svgText">
              MA 11
            </text>
            <text id="RIn" x="925" y="199" class="svgText">
              RI 4
            </text>
            <text id="CTn" x="918" y="228" class="svgText">
              CT 7
            </text>
            <text id="NJn" x="898" y="260" class="svgText">
              NJ 14
            </text>
            <text id="DEn" x="891" y="284" class="svgText">
              DE 3
            </text>
            <text id="MDn" x="883" y="305" class="svgText">
              MD 10
            </text>
            <text id="DCn" x="864" y="327" class="svgText">
              DC 3
            </text>
          </g>
        </g>
        <path
          id="lines"
          d="M844,62l13,29 M832,86l8,17 M889,153l34,3 M882,178l41,12 M866,184l51,33 M845,230l50,22 M837,250l51,26 M833,261l46,33 M800,251l61,61"
          stroke="#000000"
          stroke-width="1.6"
        />
        {/* <path
          id="frames"
          fill="none"
          stroke="#A9A9A9"
          stroke-width="2"
          d="M215,493v55l36,45 M0,425h147l68,68h85l54,54v46"
        /> */}
      </svg>
    );
  }
}

USAMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  defaultFill: PropTypes.string,
  customize: PropTypes.object
};

USAMap.defaultProps = {
  onClick: () => {},
  width: 959,
  height: 593,
  defaultFill: "#D3D3D3",
  title: "Blank US states map",
  customize: {}
};

export default USAMap;

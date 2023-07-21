import React from 'react'
import "./ProjectDetails.css"
export const ProjectDetails = () => {
  return (
    <div className="container-fluid px-5 pt-5">
    <div className="d-flex justify-content-between align-items-center mb-5">
      <h5 className="mb-0">Project Statictics</h5>
      <div className="d-flex align-items-center">
        <button className="btn btn-primary" fdprocessedid="nxz4ou">
          <span>
            <span className="icon">
              <span className="feather-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-upload-cloud"
                >
                  <polyline points="16 16 12 12 8 16" />
                  <line x1={12} y1={12} x2={12} y2={21} />
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                  <polyline points="16 16 12 12 8 16" />
                </svg>
              </span>
            </span>
            <span>Export</span>
          </span>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-9 mb-4">
        <div className="row">
          <div className="col-xxl-12 mb-4">
            <div className="card card-flush rounded-8 mb-0">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 wdg-1">
                    <div className="row gx-0">
                      <div className="col-sm-6 p-0">
                        <div className="p-sm-3  pb-4 border-end border-xl-0 border-bottom border-light">
                          <h6>Finished Projects</h6>
                          <div className="d-flex align-items-center">
                            <span className="d-block fs-3 fw-medium text-dark mb-0">
                              300
                            </span>
                            <span className="badge badge-sm badge-soft-success ms-1">
                              <i className="bi bi-arrow-up" /> 7.5%
                            </span>
                          </div>
                          <span>Projects</span>
                        </div>
                      </div>
                      <div className="col-sm-6 p-0">
                        <div className="p-sm-3  pb-4 border-bottom border-light">
                          <h6>Pending Projects</h6>
                          <div className="d-flex align-items-center">
                            <span className="d-block fs-3 fw-medium text-dark mb-0">
                              120
                            </span>
                            <span className="badge badge-sm badge-soft-danger ms-1">
                              <i className="bi bi-arrow-down" /> -3%
                            </span>
                          </div>
                          <span>Projects</span>
                        </div>
                      </div>
                      <div className="col-sm-6 p-0">
                        <div className="p-sm-3  pb-4 border-end border-light">
                          <h6>Paid Projects</h6>
                          <div className="d-flex align-items-center">
                            <span className="d-block fs-3 fw-medium text-dark mb-0">
                              105
                            </span>
                            <span className="badge badge-sm badge-soft-danger ms-1">
                              <i className="bi bi-arrow-down" /> -5%
                            </span>
                          </div>
                          <span>Projects</span>
                        </div>
                      </div>
                      <div className="col-sm-6 p-0">
                        <div className="p-sm-3  pb-4">
                          <h6>Unpaid Projects</h6>
                          <div className="d-flex align-items-center">
                            <span className="d-block fs-3 fw-medium text-dark mb-0">
                              142
                            </span>
                            <span className="badge badge-sm badge-soft-success ms-1">
                              <i className="bi bi-arrow-up" /> 9%
                            </span>
                          </div>
                          <span>Projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center justify-content-between pt-3">
                      <h6>Overview</h6>
                      <div>
                        <div className="d-inline-block">
                          <span className="badge-status">
                            <span className="badge bg-primary badge-indicator badge-indicator-nobdr" />
                            <span className="badge-label">Direct</span>
                          </span>
                        </div>
                        <div className="d-inline-block ms-3">
                          <span className="badge-status">
                            <span className="badge bg-primary-light-2 badge-indicator badge-indicator-nobdr" />
                            <span className="badge-label">Organic</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="column_chart_2" style={{ minHeight: 228 }}>
                      <div
                        id="apexcharts9xdepc4x"
                        className="apexcharts-canvas apexcharts9xdepc4x apexcharts-theme-light"
                        style={{ width: 382, height: 213 }}
                      >
                        <svg
                          id="SvgjsSvg1418"
                          width={382}
                          height={213}
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        //   xmlns:svgjs="http://svgjs.dev"
                          className="apexcharts-svg"
                        //   xmlns:data="ApexChartsNS"
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}
                        >
                          <g
                            id="SvgjsG1420"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(63.27875055074692, 30)"
                          >
                            <defs id="SvgjsDefs1419">
                              <linearGradient
                                id="SvgjsLinearGradient1425"
                                x1={0}
                                y1={0}
                                x2={0}
                                y2={1}
                              >
                                <stop
                                  id="SvgjsStop1426"
                                  stopOpacity="0.4"
                                  stopColor="rgba(216,227,240,0.4)"
                                  offset={0}
                                />
                                <stop
                                  id="SvgjsStop1427"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                                <stop
                                  id="SvgjsStop1428"
                                  stopOpacity="0.5"
                                  stopColor="rgba(190,209,230,0.5)"
                                  offset={1}
                                />
                              </linearGradient>
                              <clipPath id="gridRectMask9xdepc4x">
                                <rect
                                  id="SvgjsRect1433"
                                  width="334.0999994277954"
                                  height="149.76000022888184"
                                  x="-19.378749978542327"
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMask9xdepc4x" />
                              <clipPath id="nonForecastMask9xdepc4x" />
                              <clipPath id="gridRectMarkerMask9xdepc4x">
                                <rect
                                  id="SvgjsRect1434"
                                  width="299.3424994707108"
                                  height="153.76000022888184"
                                  x={-2}
                                  y={-2}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <rect
                              id="SvgjsRect1429"
                              width="11.075343730151653"
                              height="149.76000022888184"
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              strokeDasharray={3}
                              fill="url(#SvgjsLinearGradient1425)"
                              className="apexcharts-xcrosshairs"
                              y2="149.76000022888184"
                              filter="none"
                              fillOpacity="0.9"
                            />
                            <g
                              id="SvgjsG1470"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG1471"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              >
                                <text
                                  id="SvgjsText1473"
                                  fontFamily="inherit"
                                  x={0}
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1474">02 Jan</tspan>
                                  <title>02 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1476"
                                  fontFamily="inherit"
                                  x="49.223749911785134"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1477">03 Jan</tspan>
                                  <title>03 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1479"
                                  fontFamily="inherit"
                                  x="98.44749982357027"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1480">04 Jan</tspan>
                                  <title>04 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1482"
                                  fontFamily="inherit"
                                  x="147.6712497353554"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1483">05 Jan</tspan>
                                  <title>05 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1485"
                                  fontFamily="inherit"
                                  x="196.89499964714054"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1486">06 Jan</tspan>
                                  <title>06 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1488"
                                  fontFamily="inherit"
                                  x="246.11874955892569"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1489">07 Jan</tspan>
                                  <title>07 Jan</title>
                                </text>
                                <text
                                  id="SvgjsText1491"
                                  fontFamily="inherit"
                                  x="295.34249947071083"
                                  y="178.76000022888184"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#646a71"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{ fontFamily: "inherit" }}
                                >
                                  <tspan id="SvgjsTspan1492">08 Jan</tspan>
                                  <title>08 Jan</title>
                                </text>
                              </g>
                            </g>
                            <g id="SvgjsG1510" className="apexcharts-grid">
                              <g
                                id="SvgjsG1511"
                                className="apexcharts-gridlines-horizontal"
                              >
                                <line
                                  id="SvgjsLine1520"
                                  x1="-17.378749978542327"
                                  y1={0}
                                  x2="312.7212494492531"
                                  y2={0}
                                  stroke="#f4f5f6"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1521"
                                  x1="-17.378749978542327"
                                  y1="37.44000005722046"
                                  x2="312.7212494492531"
                                  y2="37.44000005722046"
                                  stroke="#f4f5f6"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1522"
                                  x1="-17.378749978542327"
                                  y1="74.88000011444092"
                                  x2="312.7212494492531"
                                  y2="74.88000011444092"
                                  stroke="#f4f5f6"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1523"
                                  x1="-17.378749978542327"
                                  y1="112.32000017166138"
                                  x2="312.7212494492531"
                                  y2="112.32000017166138"
                                  stroke="#f4f5f6"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine1524"
                                  x1="-17.378749978542327"
                                  y1="149.76000022888184"
                                  x2="312.7212494492531"
                                  y2="149.76000022888184"
                                  stroke="#f4f5f6"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG1512"
                                className="apexcharts-gridlines-vertical"
                              />
                              <line
                                id="SvgjsLine1513"
                                x1={0}
                                y1="150.76000022888184"
                                x2={0}
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1514"
                                x1="49.223749911785134"
                                y1="150.76000022888184"
                                x2="49.223749911785134"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1515"
                                x1="98.44749982357027"
                                y1="150.76000022888184"
                                x2="98.44749982357027"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1516"
                                x1="147.6712497353554"
                                y1="150.76000022888184"
                                x2="147.6712497353554"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1517"
                                x1="196.89499964714054"
                                y1="150.76000022888184"
                                x2="196.89499964714054"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1518"
                                x1="246.11874955892569"
                                y1="150.76000022888184"
                                x2="246.11874955892569"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1519"
                                x1="295.34249947071083"
                                y1="150.76000022888184"
                                x2="295.34249947071083"
                                y2="156.76000022888184"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-xaxis-tick"
                              />
                              <line
                                id="SvgjsLine1526"
                                x1={0}
                                y1="149.76000022888184"
                                x2="295.3424994707108"
                                y2="149.76000022888184"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine1525"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2="149.76000022888184"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG1435"
                              className="apexcharts-bar-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG1436"
                                className="apexcharts-series"
                                rel={1}
                                seriesname="PRODUCTxA"
                                // data:realindex={0}
                              >
                                <path
                                  id="SvgjsPath1440"
                                  d="M -11.075343730151653 149.76000022888184L -11.075343730151653 72.39200010299683Q -11.075343730151653 67.39200010299683 -6.075343730151653 67.39200010299683L -5 67.39200010299683Q 0 67.39200010299683 0 72.39200010299683L 0 72.39200010299683L 0 149.76000022888184L 0 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M -11.075343730151653 149.76000022888184L -11.075343730151653 72.39200010299683Q -11.075343730151653 67.39200010299683 -6.075343730151653 67.39200010299683L -5 67.39200010299683Q 0 67.39200010299683 0 72.39200010299683L 0 72.39200010299683L 0 149.76000022888184L 0 149.76000022888184z"
                                  pathfrom="M -11.075343730151653 149.76000022888184L -11.075343730151653 149.76000022888184L 0 149.76000022888184L 0 149.76000022888184L 0 149.76000022888184L 0 149.76000022888184L 0 149.76000022888184L -11.075343730151653 149.76000022888184"
                                  cy="67.39200010299683"
                                  cx={0}
                                  j={0}
                                  val={44}
                                  barheight="82.368000125885"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1442"
                                  d="M 38.148406181633476 149.76000022888184L 38.148406181633476 51.800000071525574Q 38.148406181633476 46.800000071525574 43.148406181633476 46.800000071525574L 44.22374991178513 46.800000071525574Q 49.22374991178513 46.800000071525574 49.22374991178513 51.800000071525574L 49.22374991178513 51.800000071525574L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 38.148406181633476 149.76000022888184L 38.148406181633476 51.800000071525574Q 38.148406181633476 46.800000071525574 43.148406181633476 46.800000071525574L 44.22374991178513 46.800000071525574Q 49.22374991178513 46.800000071525574 49.22374991178513 51.800000071525574L 49.22374991178513 51.800000071525574L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184z"
                                  pathfrom="M 38.148406181633476 149.76000022888184L 38.148406181633476 149.76000022888184L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184L 38.148406181633476 149.76000022888184"
                                  cy="46.800000071525574"
                                  cx="49.22374991178513"
                                  j={1}
                                  val={55}
                                  barheight="102.96000015735626"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1444"
                                  d="M 87.3721560934186 149.76000022888184L 87.3721560934186 78.00800011157989Q 87.3721560934186 73.00800011157989 92.3721560934186 73.00800011157989L 93.44749982357025 73.00800011157989Q 98.44749982357025 73.00800011157989 98.44749982357025 78.00800011157989L 98.44749982357025 78.00800011157989L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 87.3721560934186 149.76000022888184L 87.3721560934186 78.00800011157989Q 87.3721560934186 73.00800011157989 92.3721560934186 73.00800011157989L 93.44749982357025 73.00800011157989Q 98.44749982357025 73.00800011157989 98.44749982357025 78.00800011157989L 98.44749982357025 78.00800011157989L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184z"
                                  pathfrom="M 87.3721560934186 149.76000022888184L 87.3721560934186 149.76000022888184L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184L 87.3721560934186 149.76000022888184"
                                  cy="73.00800011157989"
                                  cx="98.44749982357025"
                                  j={2}
                                  val={41}
                                  barheight="76.75200011730195"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1446"
                                  d="M 136.59590600520374 149.76000022888184L 136.59590600520374 29.3360000371933Q 136.59590600520374 24.3360000371933 141.59590600520374 24.3360000371933L 142.6712497353554 24.3360000371933Q 147.6712497353554 24.3360000371933 147.6712497353554 29.3360000371933L 147.6712497353554 29.3360000371933L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 136.59590600520374 149.76000022888184L 136.59590600520374 29.3360000371933Q 136.59590600520374 24.3360000371933 141.59590600520374 24.3360000371933L 142.6712497353554 24.3360000371933Q 147.6712497353554 24.3360000371933 147.6712497353554 29.3360000371933L 147.6712497353554 29.3360000371933L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184z"
                                  pathfrom="M 136.59590600520374 149.76000022888184L 136.59590600520374 149.76000022888184L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184L 136.59590600520374 149.76000022888184"
                                  cy="24.3360000371933"
                                  cx="147.6712497353554"
                                  j={3}
                                  val={67}
                                  barheight="125.42400019168853"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1448"
                                  d="M 185.81965591698886 149.76000022888184L 185.81965591698886 113.57600016593933Q 185.81965591698886 108.57600016593933 190.81965591698886 108.57600016593933L 191.8949996471405 108.57600016593933Q 196.8949996471405 108.57600016593933 196.8949996471405 113.57600016593933L 196.8949996471405 113.57600016593933L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 185.81965591698886 149.76000022888184L 185.81965591698886 113.57600016593933Q 185.81965591698886 108.57600016593933 190.81965591698886 108.57600016593933L 191.8949996471405 108.57600016593933Q 196.8949996471405 108.57600016593933 196.8949996471405 113.57600016593933L 196.8949996471405 113.57600016593933L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184z"
                                  pathfrom="M 185.81965591698886 149.76000022888184L 185.81965591698886 149.76000022888184L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184L 185.81965591698886 149.76000022888184"
                                  cy="108.57600016593933"
                                  cx="196.8949996471405"
                                  j={4}
                                  val={22}
                                  barheight="41.1840000629425"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1450"
                                  d="M 235.04340582877398 149.76000022888184L 235.04340582877398 74.26400010585785Q 235.04340582877398 69.26400010585785 240.04340582877398 69.26400010585785L 241.11874955892563 69.26400010585785Q 246.11874955892563 69.26400010585785 246.11874955892563 74.26400010585785L 246.11874955892563 74.26400010585785L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 235.04340582877398 149.76000022888184L 235.04340582877398 74.26400010585785Q 235.04340582877398 69.26400010585785 240.04340582877398 69.26400010585785L 241.11874955892563 69.26400010585785Q 246.11874955892563 69.26400010585785 246.11874955892563 74.26400010585785L 246.11874955892563 74.26400010585785L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184z"
                                  pathfrom="M 235.04340582877398 149.76000022888184L 235.04340582877398 149.76000022888184L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184L 235.04340582877398 149.76000022888184"
                                  cy="69.26400010585785"
                                  cx="246.11874955892563"
                                  j={5}
                                  val={43}
                                  barheight="80.49600012302399"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1452"
                                  d="M 284.26715574055913 149.76000022888184L 284.26715574055913 72.39200010299683Q 284.26715574055913 67.39200010299683 289.26715574055913 67.39200010299683L 290.3424994707108 67.39200010299683Q 295.3424994707108 67.39200010299683 295.3424994707108 72.39200010299683L 295.3424994707108 72.39200010299683L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184z"
                                  fill="rgba(97,114,243,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 284.26715574055913 149.76000022888184L 284.26715574055913 72.39200010299683Q 284.26715574055913 67.39200010299683 289.26715574055913 67.39200010299683L 290.3424994707108 67.39200010299683Q 295.3424994707108 67.39200010299683 295.3424994707108 72.39200010299683L 295.3424994707108 72.39200010299683L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184z"
                                  pathfrom="M 284.26715574055913 149.76000022888184L 284.26715574055913 149.76000022888184L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184L 284.26715574055913 149.76000022888184"
                                  cy="67.39200010299683"
                                  cx="295.3424994707108"
                                  j={6}
                                  val={44}
                                  barheight="82.368000125885"
                                  barwidth="11.075343730151653"
                                />
                                <g
                                  id="SvgjsG1438"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG1439"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1441"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1443"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1445"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1447"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1449"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1451"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1453"
                                className="apexcharts-series"
                                rel={2}
                                seriesname="PRODUCTxB"
                                // data:realindex={1}
                              >
                                <path
                                  id="SvgjsPath1457"
                                  d="M 0 149.76000022888184L 0 130.42400019168855Q 0 125.42400019168855 5 125.42400019168855L 6.075343730151653 125.42400019168855Q 11.075343730151653 125.42400019168855 11.075343730151653 130.42400019168855L 11.075343730151653 130.42400019168855L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 0 149.76000022888184L 0 130.42400019168855Q 0 125.42400019168855 5 125.42400019168855L 6.075343730151653 125.42400019168855Q 11.075343730151653 125.42400019168855 11.075343730151653 130.42400019168855L 11.075343730151653 130.42400019168855L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184z"
                                  pathfrom="M 0 149.76000022888184L 0 149.76000022888184L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184L 11.075343730151653 149.76000022888184L 0 149.76000022888184"
                                  cy="125.42400019168853"
                                  cx="11.075343730151653"
                                  j={0}
                                  val={13}
                                  barheight="24.336000037193298"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1459"
                                  d="M 49.22374991178513 149.76000022888184L 49.22374991178513 111.7040001630783Q 49.22374991178513 106.7040001630783 54.22374991178513 106.7040001630783L 55.29909364193678 106.7040001630783Q 60.29909364193678 106.7040001630783 60.29909364193678 111.7040001630783L 60.29909364193678 111.7040001630783L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 49.22374991178513 149.76000022888184L 49.22374991178513 111.7040001630783Q 49.22374991178513 106.7040001630783 54.22374991178513 106.7040001630783L 55.29909364193678 106.7040001630783Q 60.29909364193678 106.7040001630783 60.29909364193678 111.7040001630783L 60.29909364193678 111.7040001630783L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184z"
                                  pathfrom="M 49.22374991178513 149.76000022888184L 49.22374991178513 149.76000022888184L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184L 60.29909364193678 149.76000022888184L 49.22374991178513 149.76000022888184"
                                  cy="106.7040001630783"
                                  cx="60.29909364193678"
                                  j={1}
                                  val={23}
                                  barheight="43.05600006580353"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1461"
                                  d="M 98.44749982357025 149.76000022888184L 98.44749982357025 117.32000017166138Q 98.44749982357025 112.32000017166138 103.44749982357025 112.32000017166138L 104.52284355372191 112.32000017166138Q 109.52284355372191 112.32000017166138 109.52284355372191 117.32000017166138L 109.52284355372191 117.32000017166138L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 98.44749982357025 149.76000022888184L 98.44749982357025 117.32000017166138Q 98.44749982357025 112.32000017166138 103.44749982357025 112.32000017166138L 104.52284355372191 112.32000017166138Q 109.52284355372191 112.32000017166138 109.52284355372191 117.32000017166138L 109.52284355372191 117.32000017166138L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184z"
                                  pathfrom="M 98.44749982357025 149.76000022888184L 98.44749982357025 149.76000022888184L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184L 109.52284355372191 149.76000022888184L 98.44749982357025 149.76000022888184"
                                  cy="112.32000017166138"
                                  cx="109.5228435537219"
                                  j={2}
                                  val={20}
                                  barheight="37.44000005722046"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1463"
                                  d="M 147.6712497353554 149.76000022888184L 147.6712497353554 139.78400020599366Q 147.6712497353554 134.78400020599366 152.6712497353554 134.78400020599366L 153.74659346550703 134.78400020599366Q 158.74659346550703 134.78400020599366 158.74659346550703 139.78400020599366L 158.74659346550703 139.78400020599366L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 147.6712497353554 149.76000022888184L 147.6712497353554 139.78400020599366Q 147.6712497353554 134.78400020599366 152.6712497353554 134.78400020599366L 153.74659346550703 134.78400020599366Q 158.74659346550703 134.78400020599366 158.74659346550703 139.78400020599366L 158.74659346550703 139.78400020599366L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184z"
                                  pathfrom="M 147.6712497353554 149.76000022888184L 147.6712497353554 149.76000022888184L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184L 158.74659346550703 149.76000022888184L 147.6712497353554 149.76000022888184"
                                  cy="134.78400020599366"
                                  cx="158.74659346550706"
                                  j={3}
                                  val={8}
                                  barheight="14.976000022888183"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1465"
                                  d="M 196.8949996471405 149.76000022888184L 196.8949996471405 130.42400019168855Q 196.8949996471405 125.42400019168855 201.8949996471405 125.42400019168855L 202.97034337729215 125.42400019168855Q 207.97034337729215 125.42400019168855 207.97034337729215 130.42400019168855L 207.97034337729215 130.42400019168855L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 196.8949996471405 149.76000022888184L 196.8949996471405 130.42400019168855Q 196.8949996471405 125.42400019168855 201.8949996471405 125.42400019168855L 202.97034337729215 125.42400019168855Q 207.97034337729215 125.42400019168855 207.97034337729215 130.42400019168855L 207.97034337729215 130.42400019168855L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184z"
                                  pathfrom="M 196.8949996471405 149.76000022888184L 196.8949996471405 149.76000022888184L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184L 207.97034337729215 149.76000022888184L 196.8949996471405 149.76000022888184"
                                  cy="125.42400019168853"
                                  cx="207.97034337729218"
                                  j={4}
                                  val={13}
                                  barheight="24.336000037193298"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1467"
                                  d="M 246.11874955892563 149.76000022888184L 246.11874955892563 104.21600015163422Q 246.11874955892563 99.21600015163422 251.11874955892563 99.21600015163422L 252.19409328907727 99.21600015163422Q 257.1940932890773 99.21600015163422 257.1940932890773 104.21600015163422L 257.1940932890773 104.21600015163422L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 246.11874955892563 149.76000022888184L 246.11874955892563 104.21600015163422Q 246.11874955892563 99.21600015163422 251.11874955892563 99.21600015163422L 252.19409328907727 99.21600015163422Q 257.1940932890773 99.21600015163422 257.1940932890773 104.21600015163422L 257.1940932890773 104.21600015163422L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184z"
                                  pathfrom="M 246.11874955892563 149.76000022888184L 246.11874955892563 149.76000022888184L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184L 257.1940932890773 149.76000022888184L 246.11874955892563 149.76000022888184"
                                  cy="99.21600015163422"
                                  cx="257.1940932890773"
                                  j={5}
                                  val={27}
                                  barheight="50.54400007724762"
                                  barwidth="11.075343730151653"
                                />
                                <path
                                  id="SvgjsPath1469"
                                  d="M 295.3424994707108 149.76000022888184L 295.3424994707108 130.42400019168855Q 295.3424994707108 125.42400019168855 300.3424994707108 125.42400019168855L 301.4178432008624 125.42400019168855Q 306.4178432008624 125.42400019168855 306.4178432008624 130.42400019168855L 306.4178432008624 130.42400019168855L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184z"
                                  fill="rgba(250,208,231,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="round"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-bar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask9xdepc4x)"
                                  pathto="M 295.3424994707108 149.76000022888184L 295.3424994707108 130.42400019168855Q 295.3424994707108 125.42400019168855 300.3424994707108 125.42400019168855L 301.4178432008624 125.42400019168855Q 306.4178432008624 125.42400019168855 306.4178432008624 130.42400019168855L 306.4178432008624 130.42400019168855L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184z"
                                  pathfrom="M 295.3424994707108 149.76000022888184L 295.3424994707108 149.76000022888184L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184L 306.4178432008624 149.76000022888184L 295.3424994707108 149.76000022888184"
                                  cy="125.42400019168853"
                                  cx="306.4178432008624"
                                  j={6}
                                  val={13}
                                  barheight="24.336000037193298"
                                  barwidth="11.075343730151653"
                                />
                                <g
                                  id="SvgjsG1455"
                                  className="apexcharts-bar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG1456"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1458"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1460"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1462"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1464"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1466"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                  <g
                                    id="SvgjsG1468"
                                    classname="apexcharts-bar-goals-groups"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG1437"
                                className="apexcharts-datalabels"
                                // data:realindex={0}
                              />
                              <g
                                id="SvgjsG1454"
                                className="apexcharts-datalabels"
                                // data:realindex={1}
                              />
                            </g>
                            <line
                              id="SvgjsLine1527"
                              x1="-17.378749978542327"
                              y1={0}
                              x2="312.7212494492531"
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine1528"
                              x1="-17.378749978542327"
                              y1={0}
                              x2="312.7212494492531"
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG1529"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG1530"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG1531"
                              className="apexcharts-point-annotations"
                            />
                          </g>
                          <g
                            id="SvgjsG1493"
                            className="apexcharts-yaxis"
                            rel={0}
                            transform="translate(11.90000057220459, 0)"
                          >
                            <g
                              id="SvgjsG1494"
                              className="apexcharts-yaxis-texts-g"
                            >
                              <text
                                id="SvgjsText1496"
                                fontFamily="inherit"
                                x={20}
                                y="31.4"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#646a71"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}
                              >
                                <tspan id="SvgjsTspan1497">80</tspan>
                                <title>80</title>
                              </text>
                              <text
                                id="SvgjsText1499"
                                fontFamily="inherit"
                                x={20}
                                y="68.84000005722046"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#646a71"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}
                              >
                                <tspan id="SvgjsTspan1500">60</tspan>
                                <title>60</title>
                              </text>
                              <text
                                id="SvgjsText1502"
                                fontFamily="inherit"
                                x={20}
                                y="106.28000011444092"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#646a71"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}
                              >
                                <tspan id="SvgjsTspan1503">40</tspan>
                                <title>40</title>
                              </text>
                              <text
                                id="SvgjsText1505"
                                fontFamily="inherit"
                                x={20}
                                y="143.72000017166138"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#646a71"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}
                              >
                                <tspan id="SvgjsTspan1506">20</tspan>
                                <title>20</title>
                              </text>
                              <text
                                id="SvgjsText1508"
                                fontFamily="inherit"
                                x={20}
                                y="181.16000022888184"
                                textAnchor="end"
                                dominantBaseline="auto"
                                fontSize="12px"
                                fontWeight={400}
                                fill="#646a71"
                                className="apexcharts-text apexcharts-yaxis-label "
                                style={{ fontFamily: "inherit" }}
                              >
                                <tspan id="SvgjsTspan1509">0</tspan>
                                <title>0</title>
                              </text>
                            </g>
                          </g>
                          <g id="SvgjsG1421" className="apexcharts-annotations" />
                        </svg>
                        <div
                          className="apexcharts-legend"
                          style={{ maxHeight: "106.5px" }}
                        />
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{ fontFamily: "Inter", fontSize: 12 }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(97, 114, 243)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "Inter", fontSize: 12 }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 2 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "rgb(250, 208, 231)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{ fontFamily: "Inter", fontSize: 12 }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
            <div className="card card-flush rounded-8 mb-0 h-100">
              <div className="card-body">
                <h3>$2103</h3>
                <span className="d-inline-flex">
                  Budget{" "}
                  <span className="text-opacity-25 text-light mx-1">●</span>
                </span>{" "}
                <span className="text-success">Increased +10%</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
            <div className="card card-flush rounded-8 mb-0 h-100">
              <div className="card-body">
                <h3>$1540</h3>
                <span className="d-inline-flex">
                  Planned{" "}
                  <span className="text-opacity-25 text-light mx-1">●</span>
                </span>{" "}
                <span className="text-success">Deviated 5%</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card card-flush rounded-8 mb-0 h-100">
              <div className="card-body">
                <h3>$1000</h3>
                <span className="d-inline-flex">
                  Actual Loss{" "}
                  <span className="text-opacity-25 text-light mx-1">●</span>
                </span>{" "}
                <span className="text-danger">-$2,143</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card card-flush rounded-8 mb-0 h-100">
              <div className="card-body">
                <h3>$8300</h3>
                <span className="d-inline-flex">
                  Cash Burn{" "}
                  <span className="text-opacity-25 text-light mx-1">●</span>
                </span>{" "}
                <span className="text-danger">-$2,143</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-3 mb-4">
        <div className="card card-flush card-simple rounded-8 mb-0 h-100">
          <div className="card-header card-header-action">
            <h6>Project Statictics</h6>
            <div className="card-action-wrap">
              <div className="dropdown">
                <a
                  className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover ms-1"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <span className="icon">
                    <span className="feather-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-more-vertical"
                      >
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </span>
                  </span>
                </a>
                <div role="menu" className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="d-flex">
              <div className="me-2">
                <i className="zmdi zmdi-alert-circle-o fs-5 pt-1" />
              </div>
              <p className="fs-7 mb-2">
                You completed <span className="text-primary">5% more</span>{" "}
                project this week then last week
              </p>
            </div>
            <div id="radial_chart_5" style={{ minHeight: 101 }}>
              <div
                id="apexchartsvzul80wl"
                className="apexcharts-canvas apexchartsvzul80wl apexcharts-theme-light"
                style={{ width: 220, height: 101 }}
              >
                <svg
                  id="SvgjsSvg1532"
                  width={220}
                  height={101}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                //   xmlns:svgjs="http://svgjs.dev"
                  className="apexcharts-svg"
                //   xmlns:data="ApexChartsNS"
                  transform="translate(0, -10)"
                  style={{ background: "transparent" }}
                >
                  <g
                    id="SvgjsG1534"
                    className="apexcharts-inner apexcharts-graphical"
                    transform="translate(0, -10)"
                  >
                    <defs id="SvgjsDefs1533">
                      <clipPath id="gridRectMaskvzul80wl">
                        <rect
                          id="SvgjsRect1536"
                          width={226}
                          height={232}
                          x={-3}
                          y={-1}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                      <clipPath id="forecastMaskvzul80wl" />
                      <clipPath id="nonForecastMaskvzul80wl" />
                      <clipPath id="gridRectMarkerMaskvzul80wl">
                        <rect
                          id="SvgjsRect1537"
                          width={224}
                          height={234}
                          x={-2}
                          y={-2}
                          rx={0}
                          ry={0}
                          opacity={1}
                          strokeWidth={0}
                          stroke="none"
                          strokeDasharray={0}
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g id="SvgjsG1538" className="apexcharts-radialbar">
                      <g id="SvgjsG1539">
                        <g id="SvgjsG1540" className="apexcharts-tracks">
                          <g
                            id="SvgjsG1541"
                            className="apexcharts-radialbar-track apexcharts-track"
                            rel={1}
                          >
                            <path
                              id="apexcharts-radialbarTrack-0"
                              d="M 42.92682926829268 109.99999999999999 A 67.07317073170732 67.07317073170732 0 0 1 177.0731707317073 110"
                              fill="none"
                              fillOpacity={1}
                              stroke="rgba(231,231,231,0.85)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth="26.829268292682926"
                              strokeDasharray={0}
                              className="apexcharts-radialbar-area"
                            //   data:pathorig="M 42.92682926829268 109.99999999999999 A 67.07317073170732 67.07317073170732 0 0 1 177.0731707317073 110"
                            />
                          </g>
                        </g>
                        <g id="SvgjsG1543">
                          <g
                            id="SvgjsG1547"
                            className="apexcharts-series apexcharts-radial-series"
                            seriesname="seriesx1"
                            rel={1}
                            // data:realindex={0}
                          >
                            <path
                              id="SvgjsPath1548"
                              d="M 42.92682926829268 109.99999999999999 A 67.07317073170732 67.07317073170732 0 0 1 164.26333498856354 70.57537941940728"
                              fill="none"
                              fillOpacity="0.85"
                              stroke="rgba(97,114,243,0.85)"
                              strokeOpacity={1}
                              strokeLinecap="butt"
                              strokeWidth="26.829268292682926"
                              strokeDasharray={0}
                              className="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                            //   data:angle={144}
                            //   data:value={80}
                              index={0}
                              j={0}
                            //   data:pathorig="M 42.92682926829268 109.99999999999999 A 67.07317073170732 67.07317073170732 0 0 1 164.26333498856354 70.57537941940728"
                            />
                          </g>
                          <circle
                            id="SvgjsCircle1544"
                            r="48.65853658536586"
                            cx={110}
                            cy={110}
                            className="apexcharts-radialbar-hollow"
                            fill="transparent"
                          />
                          <g
                            id="SvgjsG1545"
                            className="apexcharts-datalabels-group"
                            transform="translate(0, 0) scale(1)"
                            style={{ opacity: 1 }}
                          >
                            <text
                              id="SvgjsText1546"
                              fontFamily="Inter"
                              x={110}
                              y={108}
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="32px"
                              fontWeight={400}
                              fill="#646a71"
                              className="apexcharts-text apexcharts-datalabel-value"
                              style={{ fontFamily: "Inter" }}
                            >
                              80%
                            </text>
                          </g>
                        </g>
                      </g>
                    </g>
                    <line
                      id="SvgjsLine1549"
                      x1={0}
                      y1={0}
                      x2={220}
                      y2={0}
                      stroke="#b6b6b6"
                      strokeDasharray={0}
                      strokeWidth={1}
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs"
                    />
                    <line
                      id="SvgjsLine1550"
                      x1={0}
                      y1={0}
                      x2={220}
                      y2={0}
                      strokeDasharray={0}
                      strokeWidth={0}
                      strokeLinecap="butt"
                      className="apexcharts-ycrosshairs-hidden"
                    />
                  </g>
                  <g id="SvgjsG1535" className="apexcharts-annotations" />
                </svg>
                <div className="apexcharts-legend" />
              </div>
            </div>
            <div className="fs-6 text-center mt-2">Activity Logs</div>
            <div className="px-xxl-3 px-2">
              <div className="d-flex justify-content-center text-center position-relative mt-5 mb-4">
                <div>
                  <div>Completed</div>
                  <div className="fs-4 text-primary fw-medium">68%</div>
                </div>
                <div className="v-separator" />
                <div>
                  <div>Progress</div>
                  <div className="fs-4 text-dark fw-medium">35%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    <div className="row">
      <div className="col-md-12 mb-md-4 mb-3">
        <div className="card card-flush card-simple rounded-8 mb-0">
          <div className="card-header card-header-action">
            <h6>
              Clients
              <span className="badge badge-sm badge-light ms-1">240</span>
            </h6>
            <div className="card-action-wrap">
              <button
                className="btn btn-sm btn-outline-light"
                fdprocessedid="7jp1fp"
              >
                <span>
                  <span className="icon">
                    <span className="feather-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-upload"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1={12} y1={3} x2={12} y2={15} />
                      </svg>
                    </span>
                  </span>
                  <span className="btn-text">import</span>
                </span>
              </button>
              <button
                className="btn btn-sm btn-primary ms-3"
                fdprocessedid="mg8jek"
              >
                <span>
                  <span className="icon">
                    <span className="feather-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1={12} y1={5} x2={12} y2={19} />
                        <line x1={5} y1={12} x2={19} y2={12} />
                      </svg>
                    </span>
                  </span>
                  <span className="btn-text">Add new</span>
                </span>
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="contact-list-view">
              <div
                id="datable_1_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="row">
                  <div className="col-7 mb-3">
                    <div className="contact-toolbar-left">
                      <div className="d-xxl-flex d-none align-items-center">
                        <div
                          className="btn-group btn-group-sm"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-light active"
                            fdprocessedid="4udoec"
                          >
                            View all
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-light"
                            fdprocessedid="lgyx2"
                          >
                            Monitored
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-light"
                            fdprocessedid="5pd0bi"
                          >
                            Unmonitored
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 mb-3">
                    <div className="contact-toolbar-right d-flex justify-content-end">
                      <div id="datable_1_filter" className="dataTables_filter">
                        <label>
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Search"
                            aria-controls="datable_1"
                          />
                        </label>
                      </div>{" "}
                      <button
                        className="btn btn-sm btn-outline-light ms-3"
                        fdprocessedid="p6nc1"
                      >
                        <span>
                          <span className="icon">
                            <i className="bi bi-filter" />
                          </span>
                          <span className="btn-text">Filters</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 table-responsive">
                    <table
                      id="datable_1"
                      className="table nowrap w-100 mb-5 dataTable no-footer"
                      role="grid"
                      aria-describedby="datable_1_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="
                                                                              
                                                                              
                                                                          "
                            style={{ width: "27.825px" }}
                          >
                            <span className="form-check fs-7 mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select-all"
                                id="customCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="customCheck1"
                              />
                            </span>
                          </th>
                          <th
                            className="sorting sorting_asc"
                            tabIndex={0}
                            aria-controls="datable_1"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                            style={{ width: "102.537px" }}
                          >
                            Name
                          </th>
                          <th
                            className="w-15 sorting"
                            tabIndex={0}
                            aria-controls="datable_1"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Email: activate to sort column ascending"
                            style={{ width: "110.85px" }}
                          >
                            Email
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="datable_1"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Teams: activate to sort column ascending"
                            style={{ width: "92.3375px" }}
                          >
                            Teams
                          </th>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Performance"
                            style={{ width: "100.613px" }}
                          >
                            Performance
                          </th>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Tags"
                            style={{ width: "239.225px" }}
                          >
                            Tags
                          </th>
                          <th
                            className="sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label=""
                            style={{ width: "89.0125px" }}
                          />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_3"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">Coursera</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                coursera.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">
                            charlie@leernoca.monster
                          </td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar13.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Jack"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar12.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Bob"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar10.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dan"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar9.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_3" style={{ minHeight: 25 }}>
                              <div
                                id="apexchartstc0guili"
                                className="apexcharts-canvas apexchartstc0guili apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1646"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1648"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1647">
                                      <clipPath id="gridRectMasktc0guili">
                                        <rect
                                          id="SvgjsRect1654"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMasktc0guili" />
                                      <clipPath id="nonForecastMasktc0guili" />
                                      <clipPath id="gridRectMarkerMasktc0guili">
                                        <rect
                                          id="SvgjsRect1655"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1653"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1661"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1662"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1675"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1676"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1678"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1679"
                                          x1={0}
                                          y1="3.5714285714285716"
                                          x2={80}
                                          y2="3.5714285714285716"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1680"
                                          x1={0}
                                          y1="7.142857142857143"
                                          x2={80}
                                          y2="7.142857142857143"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1681"
                                          x1={0}
                                          y1="10.714285714285715"
                                          x2={80}
                                          y2="10.714285714285715"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1682"
                                          x1={0}
                                          y1="14.285714285714286"
                                          x2={80}
                                          y2="14.285714285714286"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1683"
                                          x1={0}
                                          y1="17.857142857142858"
                                          x2={80}
                                          y2="17.857142857142858"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1684"
                                          x1={0}
                                          y1="21.42857142857143"
                                          x2={80}
                                          y2="21.42857142857143"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1685"
                                          x1={0}
                                          y1="25.000000000000004"
                                          x2={80}
                                          y2="25.000000000000004"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1677"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1687"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1686"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1656"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1657"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1660"
                                          d="M 0 19.642857142857142L 8 15.714285714285714L 16 6.785714285714285L 24 11.071428571428571L 32 2.5L 40 16.07142857142857L 48 9.285714285714285L 56 20.714285714285715L 64 12.142857142857142L 72 21.785714285714285L 80 5.714285714285712"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMasktc0guili)"
                                          pathto="M 0 19.642857142857142L 8 15.714285714285714L 16 6.785714285714285L 24 11.071428571428571L 32 2.5L 40 16.07142857142857L 48 9.285714285714285L 56 20.714285714285715L 64 12.142857142857142L 72 21.785714285714285L 80 5.714285714285712"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1658"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1693"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker whizfune7k no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1659"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1688"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1689"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1690"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1691"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1692"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1652"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1674"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1649"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-danger my-1  me-2">
                              education
                            </span>
                            <span className="badge badge-soft-primary  my-1  me-2">
                              admin
                            </span>
                            <span className="badge badge-soft-info my-1  me-2">
                              +3
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_6"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">Icons 8</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                icons8.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">tomcz@Zapped.com</td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar13.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-xs avatar-soft-danger avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Bob"
                              >
                                <span className="initial-wrap">B</span>
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Danial"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar2.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_6" style={{ minHeight: 25 }}>
                              <div
                                id="apexchartsuvm0vwseh"
                                className="apexcharts-canvas apexchartsuvm0vwseh apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1790"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1792"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1791">
                                      <clipPath id="gridRectMaskuvm0vwseh">
                                        <rect
                                          id="SvgjsRect1798"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskuvm0vwseh" />
                                      <clipPath id="nonForecastMaskuvm0vwseh" />
                                      <clipPath id="gridRectMarkerMaskuvm0vwseh">
                                        <rect
                                          id="SvgjsRect1799"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1797"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1805"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1806"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1819"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1820"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1822"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1823"
                                          x1={0}
                                          y1={5}
                                          x2={80}
                                          y2={5}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1824"
                                          x1={0}
                                          y1={10}
                                          x2={80}
                                          y2={10}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1825"
                                          x1={0}
                                          y1={15}
                                          x2={80}
                                          y2={15}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1826"
                                          x1={0}
                                          y1={20}
                                          x2={80}
                                          y2={20}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1827"
                                          x1={0}
                                          y1={25}
                                          x2={80}
                                          y2={25}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1821"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1829"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1828"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1800"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1801"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1804"
                                          d="M 0 5L 8 18.5L 16 14.5L 24 15.5L 32 11.5L 40 22.5L 48 3L 56 19L 64 7L 72 20.5L 80 20"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskuvm0vwseh)"
                                          pathto="M 0 5L 8 18.5L 16 14.5L 24 15.5L 32 11.5L 40 22.5L 48 3L 56 19L 64 7L 72 20.5L 80 20"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1802"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1835"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wxedzxl20i no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1803"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1830"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1831"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1832"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1833"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1834"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1796"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1818"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1793"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-success my-1  me-2">
                              Library
                            </span>
                            <span className="badge badge-soft-warning  my-1  me-2">
                              Asset
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_5"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">PCD</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                pcdeals.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">jaquljoker@Zapped.com</td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar4.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Danial"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar5.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-xs avatar-soft-violet avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Sam"
                              >
                                <span className="initial-wrap">S</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_5" style={{ minHeight: 25 }}>
                              <div
                                id="apexchartsjo75fpg8"
                                className="apexcharts-canvas apexchartsjo75fpg8 apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1743"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1745"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1744">
                                      <clipPath id="gridRectMaskjo75fpg8">
                                        <rect
                                          id="SvgjsRect1751"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskjo75fpg8" />
                                      <clipPath id="nonForecastMaskjo75fpg8" />
                                      <clipPath id="gridRectMarkerMaskjo75fpg8">
                                        <rect
                                          id="SvgjsRect1752"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1750"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1758"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1759"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1772"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1773"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1775"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1776"
                                          x1={0}
                                          y1={5}
                                          x2={80}
                                          y2={5}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1777"
                                          x1={0}
                                          y1={10}
                                          x2={80}
                                          y2={10}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1778"
                                          x1={0}
                                          y1={15}
                                          x2={80}
                                          y2={15}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1779"
                                          x1={0}
                                          y1={20}
                                          x2={80}
                                          y2={20}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1780"
                                          x1={0}
                                          y1={25}
                                          x2={80}
                                          y2={25}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1774"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1782"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1781"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1753"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1754"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1757"
                                          d="M 0 5L 8 18.5L 16 14.5L 24 15.5L 32 11.5L 40 22.5L 48 3L 56 19L 64 7L 72 20.5L 80 20"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskjo75fpg8)"
                                          pathto="M 0 5L 8 18.5L 16 14.5L 24 15.5L 32 11.5L 40 22.5L 48 3L 56 19L 64 7L 72 20.5L 80 20"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1755"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1788"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wrzd0icdx no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1756"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1783"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1784"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1785"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1786"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1787"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1749"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1771"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1746"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-danger my-1  me-2">
                              Portal
                            </span>
                            <span className="badge badge-soft-primary  my-1  me-2">
                              admin
                            </span>
                            <span className="badge badge-soft-info my-1  me-2">
                              +3
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_1"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">Phonepay</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                phonepay.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">morgan@Zapped.com</td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar1.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Deo"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar2.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Andy"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar3.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-xs avatar-soft-danger avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Tom"
                              >
                                <span className="initial-wrap">B</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_1" style={{ minHeight: 25 }}>
                              <div
                                id="apexchartsbhv0syv3"
                                className="apexcharts-canvas apexchartsbhv0syv3 apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1552"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1554"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1553">
                                      <clipPath id="gridRectMaskbhv0syv3">
                                        <rect
                                          id="SvgjsRect1560"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskbhv0syv3" />
                                      <clipPath id="nonForecastMaskbhv0syv3" />
                                      <clipPath id="gridRectMarkerMaskbhv0syv3">
                                        <rect
                                          id="SvgjsRect1561"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1559"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1567"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1568"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1581"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1582"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1584"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1585"
                                          x1={0}
                                          y1={5}
                                          x2={80}
                                          y2={5}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1586"
                                          x1={0}
                                          y1={10}
                                          x2={80}
                                          y2={10}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1587"
                                          x1={0}
                                          y1={15}
                                          x2={80}
                                          y2={15}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1588"
                                          x1={0}
                                          y1={20}
                                          x2={80}
                                          y2={20}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1589"
                                          x1={0}
                                          y1={25}
                                          x2={80}
                                          y2={25}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1583"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1591"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1590"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1562"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1563"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1566"
                                          d="M 0 6.25L 8 8.5L 16 14.75L 24 2.75L 32 6.75L 40 19.75L 48 14L 56 24.5L 64 17L 72 22.75L 80 21.5"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskbhv0syv3)"
                                          pathto="M 0 6.25L 8 8.5L 16 14.75L 24 2.75L 32 6.75L 40 19.75L 48 14L 56 24.5L 64 17L 72 22.75L 80 21.5"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1564"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1597"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wrnhi2rru no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1565"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1592"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1593"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1594"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1595"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1596"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1558"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1580"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1555"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-primary  my-1  me-2">
                              admin
                            </span>
                            <span className="badge badge-soft-danger my-1  me-2">
                              Finance
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="odd">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_2"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">Swiggy</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                swiggy.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">huma@clariesup.au</td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar13.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-xs avatar-soft-danger avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Bob"
                              >
                                <span className="initial-wrap">B</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_2" style={{ minHeight: 25 }}>
                              <div
                                id="apexcharts3rhavmk4"
                                className="apexcharts-canvas apexcharts3rhavmk4 apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1599"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1601"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1600">
                                      <clipPath id="gridRectMask3rhavmk4">
                                        <rect
                                          id="SvgjsRect1607"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMask3rhavmk4" />
                                      <clipPath id="nonForecastMask3rhavmk4" />
                                      <clipPath id="gridRectMarkerMask3rhavmk4">
                                        <rect
                                          id="SvgjsRect1608"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1606"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1614"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1615"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1628"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1629"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1631"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1632"
                                          x1={0}
                                          y1={5}
                                          x2={80}
                                          y2={5}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1633"
                                          x1={0}
                                          y1={10}
                                          x2={80}
                                          y2={10}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1634"
                                          x1={0}
                                          y1={15}
                                          x2={80}
                                          y2={15}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1635"
                                          x1={0}
                                          y1={20}
                                          x2={80}
                                          y2={20}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1636"
                                          x1={0}
                                          y1={25}
                                          x2={80}
                                          y2={25}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1630"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1638"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1637"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1609"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1610"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1613"
                                          d="M 0 18.75L 8 8.5L 16 14.75L 24 2.75L 32 9.25L 40 18.75L 48 14L 56 22L 64 16L 72 22.75L 80 11.5"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMask3rhavmk4)"
                                          pathto="M 0 18.75L 8 8.5L 16 14.75L 24 2.75L 32 9.25L 40 18.75L 48 14L 56 22L 64 16L 72 22.75L 80 11.5"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1611"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1644"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wvayjhzyr no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1612"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1639"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1640"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1641"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1642"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1643"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1605"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1627"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1602"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-success my-1  me-2">
                              customer data
                            </span>
                            <span className="badge badge-soft-primary  my-1  me-2">
                              admin
                            </span>
                            <span className="badge badge-soft-info my-1  me-2">
                              +4
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="even">
                          <td>
                            <span className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input check-select"
                                id="chk_sel_4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="chk_sel_4"
                              />
                            </span>
                          </td>
                          <td className="sorting_1">
                            <div className="text-high-em">Tinder</div>
                            <div className="fs-7">
                              <a
                                href="#"
                                className="table-link-text link-medium-em"
                              >
                                tinder.com
                              </a>
                            </div>
                          </td>
                          <td className="text-truncate">winston@worthniza.ga</td>
                          <td>
                            <div className="avatar-group avatar-group-sm avatar-group-overlapped">
                              <div
                                className="avatar avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Dean"
                              >
                                <img
                                  src="https://hencework.com/theme/zapped/main/dist/img/avatar6.jpg"
                                  alt="user"
                                  className="avatar-img"
                                />
                              </div>
                              <div
                                className="avatar avatar-xs avatar-soft-primary avatar-rounded"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-bs-original-title="Tom"
                              >
                                <span className="initial-wrap">C</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div id="sparkline_chart_4" style={{ minHeight: 25 }}>
                              <div
                                id="apexchartskv0j4dtg"
                                className="apexcharts-canvas apexchartskv0j4dtg apexcharts-theme-light"
                                style={{ width: 80, height: 25 }}
                              >
                                <svg
                                  id="SvgjsSvg1695"
                                  width={80}
                                  height={25}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                //   xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg"
                                //   xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1697"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(0, 0)"
                                  >
                                    <defs id="SvgjsDefs1696">
                                      <clipPath id="gridRectMaskkv0j4dtg">
                                        <rect
                                          id="SvgjsRect1703"
                                          width={86}
                                          height={27}
                                          x={-3}
                                          y={-1}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskkv0j4dtg" />
                                      <clipPath id="nonForecastMaskkv0j4dtg" />
                                      <clipPath id="gridRectMarkerMaskkv0j4dtg">
                                        <rect
                                          id="SvgjsRect1704"
                                          width={84}
                                          height={29}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <line
                                      id="SvgjsLine1702"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={25}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x={0}
                                      y={0}
                                      width={1}
                                      height={25}
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <g
                                      id="SvgjsG1710"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1711"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, 4)"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1724"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1725"
                                        className="apexcharts-gridlines-horizontal"
                                        style={{ display: "none" }}
                                      >
                                        <line
                                          id="SvgjsLine1727"
                                          x1={0}
                                          y1={0}
                                          x2={80}
                                          y2={0}
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1728"
                                          x1={0}
                                          y1="4.166666666666667"
                                          x2={80}
                                          y2="4.166666666666667"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1729"
                                          x1={0}
                                          y1="8.333333333333334"
                                          x2={80}
                                          y2="8.333333333333334"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1730"
                                          x1={0}
                                          y1="12.5"
                                          x2={80}
                                          y2="12.5"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1731"
                                          x1={0}
                                          y1="16.666666666666668"
                                          x2={80}
                                          y2="16.666666666666668"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1732"
                                          x1={0}
                                          y1="20.833333333333336"
                                          x2={80}
                                          y2="20.833333333333336"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1733"
                                          x1={0}
                                          y1="25.000000000000004"
                                          x2={80}
                                          y2="25.000000000000004"
                                          stroke="#f4f5f6"
                                          strokeDasharray={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1726"
                                        className="apexcharts-gridlines-vertical"
                                        style={{ display: "none" }}
                                      />
                                      <line
                                        id="SvgjsLine1735"
                                        x1={0}
                                        y1={25}
                                        x2={80}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1734"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={25}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1705"
                                      className="apexcharts-line-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1706"
                                        className="apexcharts-series"
                                        seriesname="seriesx1"
                                        // data:longestseries="true"
                                        rel={1}
                                        // data:realindex={0}
                                      >
                                        <path
                                          id="SvgjsPath1709"
                                          d="M 0 24.583333333333332L 8 23.75L 16 3.75L 24 8.75L 32 22.083333333333332L 40 14.583333333333332L 48 6.666666666666664L 56 20L 64 10L 72 21.25L 80 20.833333333333332"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="rgba(97,114,243,0.85)"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={2}
                                          strokeDasharray={0}
                                          className="apexcharts-line"
                                          index={0}
                                          clipPath="url(#gridRectMaskkv0j4dtg)"
                                          pathto="M 0 24.583333333333332L 8 23.75L 16 3.75L 24 8.75L 32 22.083333333333332L 40 14.583333333333332L 48 6.666666666666664L 56 20L 64 10L 72 21.25L 80 20.833333333333332"
                                          pathfrom="M -1 25L -1 25L 8 25L 16 25L 24 25L 32 25L 40 25L 48 25L 56 25L 64 25L 72 25L 80 25"
                                        />
                                        <g
                                          id="SvgjsG1707"
                                          className="apexcharts-series-markers-wrap"
                                        //   data:realindex={0}
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1741"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wgeoe5b6k no-pointer-events"
                                              stroke="#ffffff"
                                              fill="#6172f3"
                                              fillOpacity={1}
                                              strokeWidth={2}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1708"
                                        className="apexcharts-datalabels"
                                        // data:realindex={0}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1736"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1737"
                                      x1={0}
                                      y1={0}
                                      x2={80}
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1738"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1739"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1740"
                                      className="apexcharts-point-annotations"
                                    />
                                  </g>
                                  <rect
                                    id="SvgjsRect1701"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1723"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(-18, 0)"
                                  />
                                  <g
                                    id="SvgjsG1698"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "12.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(97, 114, 243)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "Inter",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge badge-soft-danger my-1  me-2">
                              Social
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Edit"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-edit-2"
                                    >
                                      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                              <a
                                className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button"
                                data-bs-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-bs-original-title="Delete"
                                href="#"
                              >
                                <span className="icon">
                                  <span className="feather-icon">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-trash"
                                    >
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_info"
                      id="datable_1_info"
                      role="status"
                      aria-live="polite"
                    >
                      1 - 6 of 6
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="datable_1_paginate"
                    >
                      <ul className="pagination custom-pagination pagination-simple pagination-sm">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="datable_1_previous"
                        >
                          <a
                            href="#"
                            aria-controls="datable_1"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="ri-arrow-left-s-line" />
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="datable_1"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next disabled"
                          id="datable_1_next"
                        >
                          <a
                            href="#"
                            aria-controls="datable_1"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="ri-arrow-right-s-line" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}

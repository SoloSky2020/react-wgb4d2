import React from "react";
import "./style.css";

import React from "react";

var img = new Image();
img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXhcpLEdBmw-eKHUpSQr4Pr4SiISjZ7sidA&usqp=CAU';
img.onclick = function() {
    window.location.href = 'Echos.js';
};
document.body.appendChild(img);

var img = new Image();
img.src = 'https://preview.redd.it/ecjxlpyswh951.jpg?auto=webp&s=480654ecbd9a6258f2cfd85b87b40c32934e28eb';
img.onclick = function() {
    window.location.href = 'Distortion.js';
};
document.body.appendChild(img);

var img = new Image();

img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kirk_Hammett_live_in_London_15_September_2008.jpg/1200px-Kirk_Hammett_live_in_London_15_September_2008.jpg';
img.onclick = function() {
    window.location.href = 'Misc.js';
};
document.body.appendChild(img);

var img = new Image();
img.src = 'https://imgc.allpostersimages.com/img/posters/slash-guns-n-roses_u-L-F9H6W70.jpg';
img.onclick = function() {
    window.location.href = 'Clean.js';
};
document.body.appendChild(img);

const HomePageComponent = () => (
  <svg width={428} height={926} viewBox="0 0 428 926">
    <defs>
      <style>
        {
          ".a{fill:none;}.b{clip-path:url(#j);}.c{fill:rgba(0,0,0,0.55);}.c,.e,.j,.x,.y{stroke:#707070;}.ac,.d{fill:#fff;}.d,.g{font-size:40px;}.d,.f,.g,.k,.t,.u,.v,.w{font-family:HelveticaNeue, Helvetica Neue;}.e{fill:#00fff5;}.f,.t,.u,.v,.w,.z{font-size:20px;}.h{fill:#ff7b0a;}.i{fill:url(#a);}.j{fill:#ab4df0;}.k{font-size:35px;}.l,.n,.p,.r{isolation:isolate;}.l{clip-path:url(#b);}.m,.o,.s{opacity:0.75;}.m{fill:url(#c);}.n{clip-path:url(#d);}.p{clip-path:url(#e);}.q{opacity:0.75;fill:url(#f);}.r{clip-path:url(#g);}.s{fill:url(#h);}.t{fill:red;}.u{fill:#9403ff;}.v{fill:#00cc3e;}.w{fill:#001dff;}.y{fill:#f5ff00;}.z{font-family:HelveticaNeue-Bold, Helvetica Neue;font-weight:700;}.aa,.ab{stroke:none;}.ab{fill:#707070;}"
        }
      </style>
      <pattern
        id="a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 176 286"
      >

        <image 
        width={176} 
        height={280} 
        xlinkHref="https://cdn.pixabay.com/photo/2012/04/14/14/45/music-34177_1280.png" />
      </pattern>
      <clipPath id="b">
        <rect className="a" width={214} height={320} />
      </clipPath>
      <pattern
        id="c"
        preserveAspectRatio="none"
        width="100%"
        height="120%"
        viewBox="0 0 1200 900"
      >
        <image 
          width={850}
          height={800}
          xlinkHref=""
        />
      </pattern>
      <clipPath id="d">
        <rect className="a" y={-1} width={214} height={388} />
      </clipPath>
      <clipPath id="e">
        <rect className="a" x={5} y={1} width={214} height={387} />
      </clipPath>
      <pattern
        id="f"
        preserveAspectRatio="none"
        width="150%"
        height="100%"
        viewBox="0 0 625 650"
      >
        <image
          width={500}
          height={700}
          xlinkHref=""
        />
      </pattern>
      <clipPath id="g">
        <rect className="a" x={166} y={1} width={214} height={319} />
      </clipPath>
      <pattern
        id="h"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 1600 900"
      >
        <image
          width={1640}
          height={900}
          xlinkHref=""
        />
      </pattern>
      <clipPath id="j">
        <rect width={428} height={926} />
      </clipPath>
    </defs>
    <g id="i" className="b">
      <rect className="ac" width={428} height={926} />
      <g className="c">
        <rect className="aa" width={428} height={154} />
        <rect className="a" x={0.5} y={0.5} width={427} height={153} />
      </g>
      <text className="d" transform="translate(103 48)">
        <tspan x={0} y={0}>
          {"Effect Board"}
        </tspan>
      </text>
      <g transform="translate(136 5)">
        <g className="e" transform="translate(24 65)">
          <ellipse className="aa" cx={54.5} cy={39} rx={54.5} ry={39} />
          <ellipse className="a" cx={54.5} cy={39} rx={54} ry={38.5} />
        </g>
        <text className="f" transform="translate(59 123)">
          <tspan x={0} y={0}>
            {"Info"}
          </tspan>
        </text>
        <text className="g" transform="translate(66 98)">
          <tspan x={0} y={0}>
            {"?"}
          </tspan>
        </text>
      </g>
      <g transform="translate(135)">
        <g className="h" transform="translate(160 65)">
          <path
            className="aa"
            d="M 54.5 81.5 C 47.19405746459961 81.5 40.10770034790039 80.42388916015625 33.437744140625 78.30155944824219 C 27.00169944763184 76.25363922119141 21.2233715057373 73.32327270507812 16.26327133178711 69.59181213378906 C 11.31371402740479 65.86830139160156 7.429571628570557 61.53557205200195 4.718714237213135 56.7140007019043 C 1.919385671615601 51.73504257202148 0.5 46.44808578491211 0.5 41 C 0.5 35.55191421508789 1.919385671615601 30.26495742797852 4.718714237213135 25.2859992980957 C 7.429571628570557 20.46442794799805 11.31371402740479 16.13170051574707 16.26327133178711 12.4081859588623 C 21.2233715057373 8.676728248596191 27.00169944763184 5.746356964111328 33.437744140625 3.698442935943604 C 40.10770034790039 1.576114296913147 47.19405746459961 0.5 54.5 0.5 C 61.80594253540039 0.5 68.89230346679688 1.576114296913147 75.562255859375 3.698442935943604 C 81.99829864501953 5.746356964111328 87.77662658691406 8.676728248596191 92.73672485351562 12.4081859588623 C 97.68628692626953 16.13170051574707 101.570426940918 20.46442794799805 104.2812881469727 25.2859992980957 C 107.0806121826172 30.26495742797852 108.5 35.55191421508789 108.5 41 C 108.5 46.44808578491211 107.0806121826172 51.73504257202148 104.2812881469727 56.7140007019043 C 101.570426940918 61.53557205200195 97.68628692626953 65.86830139160156 92.73672485351562 69.59181213378906 C 87.77662658691406 73.32327270507812 81.99829864501953 76.25363922119141 75.562255859375 78.30155944824219 C 68.89230346679688 80.42388916015625 61.80594253540039 81.5 54.5 81.5 Z"
          />
          <path
            className="ab"
            d="M 54.5 1 C 47.24557113647461 1 40.21021270751953 2.068183898925781 33.58935546875 4.174896240234375 C 27.20706939697266 6.205711364746094 21.47885894775391 9.110214233398438 16.56385803222656 12.8077392578125 C 11.66992950439453 16.48941802978516 7.831283569335938 20.7701416015625 5.154556274414062 25.53102874755859 C 2.397796630859375 30.43427276611328 1 35.63878631591797 1 41 C 1 46.36121368408203 2.397796630859375 51.56572723388672 5.154556274414062 56.46897125244141 C 7.831283569335938 61.2298583984375 11.66992950439453 65.51058959960938 16.56385803222656 69.1922607421875 C 21.47885894775391 72.88978576660156 27.20706939697266 75.79428863525391 33.58935546875 77.82510375976562 C 40.21021270751953 79.93181610107422 47.24557113647461 81 54.5 81 C 61.75442886352539 81 68.78978729248047 79.93181610107422 75.41064453125 77.82510375976562 C 81.79293060302734 75.79428863525391 87.52114105224609 72.88978576660156 92.43614196777344 69.1922607421875 C 97.33007049560547 65.51058959960938 101.1687164306641 61.2298583984375 103.8454437255859 56.46897125244141 C 106.6022033691406 51.56572723388672 108 46.36121368408203 108 41 C 108 35.63878631591797 106.6022033691406 30.43427276611328 103.8454437255859 25.53102874755859 C 101.1687164306641 20.7701416015625 97.33007049560547 16.48941802978516 92.43614196777344 12.8077392578125 C 87.52114105224609 9.110214233398438 81.79293060302734 6.205711364746094 75.41064453125 4.174896240234375 C 68.78978729248047 2.068183898925781 61.75442886352539 1 54.5 1 M 54.5 0 C 84.59951782226562 0 109 18.35632705688477 109 41 C 109 63.64366912841797 84.59951782226562 82 54.5 82 C 24.40048217773438 82 0 63.64366912841797 0 41 C 0 18.35632705688477 24.40048217773438 0 54.5 0 Z"
          />
        </g>
        <rect
          className="i"
          width={18}
          height={29}
          transform="translate(207 67)"
        />
        <text className="f" transform="translate(215 108)">
          <tspan x={-28.71} y={0}>
            {"Audio "}
          </tspan>
          <tspan x={-40} y={24}>
            {"selection"}
          </tspan>
        </text>
      </g>
      <g transform="translate(-270)">
        <g className="j" transform="translate(295 65)">
          <ellipse className="aa" cx={54.5} cy={41} rx={54.5} ry={41} />
          <ellipse className="a" cx={54.5} cy={41} rx={54} ry={40.5} />
        </g>
        <text className="f" transform="translate(315 126)">
          <tspan x={0} y={0}>
            {"Credits"}
          </tspan>
        </text>
        <text className="k" transform="translate(334 100)">
          <tspan x={0} y={0}>
            {"@"}
          </tspan>
        </text>
      </g>
      <g className="l" transform="translate(214 219)">
        <rect className="m" width={321} height={320} />
      </g>
      <g className="n" transform="translate(210 540)">
        <image
          className="o"
          width={350}
          height={500}
          xlinkHref=""
        />
      </g>
      <g className="p" transform="translate(-5 538)">
        <rect className="q" width={219} height={388} />
      </g>
      <g className="r" transform="translate(-166 218)">
        <rect className="s" width={571} height={321} />
      </g>
      <text className="t" transform="translate(61 245)">
        <tspan x={0} y={0}>
          {"Distortion"}
        </tspan>
      </text>
      <text className="u" transform="translate(253 245)">
        <tspan x={0} y={0}>
          {"Echo/repeaters"}
        </tspan>
      </text>
      <text className="v" transform="translate(297 582)">
        <tspan x={0} y={0}>
          {"Misc."}
        </tspan>
      </text>
      <text className="w" transform="translate(70 570)">
        <tspan x={0} y={0}>
          {"Clean"}
        </tspan>
      </text>
      <g className="x" transform="translate(0 154)">
        <rect className="aa" width={428} height={65} />
        <rect className="a" x={0.5} y={0.5} width={427} height={64} />
      </g>
      <g transform="translate(0 165)">
        <g className="y">
          <rect className="aa" width={428} height={43} rx={21.5} />
          <rect className="a" x={0.5} y={0.5} width={427} height={42} rx={21} />
        </g>
      </g>
      <text className="z" transform="translate(179 195)">
        <tspan x={0} y={0}>
          {"Tutorial"}
        </tspan>
      </text>
    </g>
  </svg>
);

export default HomePageComponent;
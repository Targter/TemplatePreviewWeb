import styled from "styled-components";
import { Link } from "react-router-dom";
const Comp2item1Card2 = () => {
  return (
    <>
      <Link
        to={"/publishItem"}
        style={{ textDecoration: "none", color: "none" }}
      >
        <Comp2item2 className="fundyourcreativitycontainer">
          <Item1cont21 className="item1cont21">
            Fund your Creativity
          </Item1cont21>
          <Item1cont22 className="item1cont22">
            <svg
              width="304"
              height="184"
              viewBox="0 0 304 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "100%", maxWidth: "100%", height: "100%" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M147.616 128.41C157.428 147.488 185.646 138.125 210.641 107.496C235.636 76.8678 247.944 36.572 238.132 17.4934C228.32 -1.58531 200.103 7.77784 175.107 38.4065C172.992 40.9987 170.967 43.6602 169.04 46.3721C171.103 34.8412 170.541 24.6682 166.852 17.4947C157.039 -1.58397 128.822 7.77917 103.827 38.4078C101.712 40.9992 99.6884 43.6597 97.7611 46.3707C99.8246 34.8401 99.2625 24.6672 95.5731 17.4938C85.7609 -1.58481 57.5438 7.77833 32.5485 38.407C7.55318 69.0357 -4.7551 109.331 5.05717 128.41C14.8694 147.489 43.0865 138.126 68.0818 107.497C70.1965 104.906 72.2204 102.245 74.1478 99.5341C72.0843 111.065 72.6464 121.238 76.3357 128.411C86.148 147.49 114.365 138.126 139.36 107.498C141.476 104.906 143.5 102.244 145.428 99.5322C143.365 111.063 143.927 121.236 147.616 128.41Z"
                fill="#F24E1E"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M212.629 10.2588C201.47 13.9616 188.313 23.8064 175.882 39.0388C173.781 41.6134 171.77 44.2572 169.855 46.9516L168.055 46.196C170.102 34.7594 169.507 24.8436 165.963 17.9521C163.623 13.4037 160.226 10.6062 156.092 9.36412C151.93 8.11391 146.921 8.41087 141.348 10.2601C130.189 13.963 117.033 23.8078 104.602 39.0401C102.502 41.6139 100.491 44.2568 98.5762 46.9502L96.7768 46.1946C98.8235 34.7583 98.2283 24.8427 94.684 17.9512C92.3447 13.4028 88.9479 10.6054 84.8133 9.36328C80.6518 8.11307 75.6425 8.41003 70.0695 10.2593C58.9104 13.9621 45.754 23.8069 33.3233 39.0393C20.9045 54.257 11.642 71.8734 6.7064 88.032C1.75351 104.247 1.22332 118.769 5.94648 127.953C8.28574 132.501 11.6826 135.299 15.8171 136.541C19.9787 137.791 24.988 137.494 30.561 135.645C41.72 131.942 54.8764 122.097 67.3071 106.865C69.4075 104.291 71.418 101.648 73.3329 98.9547L75.1323 99.7103C73.0856 111.147 73.6808 121.062 77.2251 127.954C79.5644 132.502 82.9612 135.3 87.0957 136.542C91.2573 137.792 96.2666 137.495 101.84 135.646C112.999 131.943 126.155 122.098 138.586 106.866C140.687 104.291 142.698 101.647 144.613 98.9528L146.413 99.7084C144.366 111.145 144.961 121.061 148.506 127.952C150.845 132.501 154.242 135.298 158.376 136.54C162.538 137.791 167.547 137.494 173.12 135.644C184.279 131.941 197.436 122.097 209.866 106.864C222.285 91.6466 231.548 74.0302 236.483 57.8716C241.436 41.6564 241.966 27.1343 237.243 17.9507C234.904 13.4023 231.507 10.6049 227.372 9.36279C223.211 8.11258 218.202 8.40953 212.629 10.2588ZM227.948 7.44735C232.645 8.8584 236.455 12.045 239.022 17.036C244.111 26.9311 243.393 42.0962 238.396 58.4558C233.382 74.872 223.992 92.7178 211.416 108.129C198.851 123.525 185.401 133.676 173.75 137.543C167.918 139.478 162.471 139.859 157.801 138.456C153.104 137.045 149.294 133.858 146.727 128.867C143.347 122.294 142.535 113.409 143.816 103.431C142.622 105.019 141.395 106.587 140.135 108.13C127.571 123.526 114.121 133.678 102.469 137.544C96.6372 139.479 91.1902 139.86 86.5203 138.457C81.8233 137.046 78.0134 133.859 75.4465 128.868C72.0661 122.296 71.2547 113.411 72.5356 103.433C71.3421 105.02 70.1154 106.587 68.8567 108.129C56.2921 123.526 42.8423 133.677 31.1909 137.543C25.3586 139.478 19.9116 139.859 15.2417 138.456C10.5447 137.045 6.7348 133.859 4.16792 128.868C-0.921191 118.972 -0.20337 103.807 4.79364 87.4478C9.80793 71.0316 19.1972 53.1858 31.7738 37.7748C44.3383 22.3784 57.7882 12.2273 69.4396 8.36107C75.2718 6.42579 80.7188 6.04492 85.3888 7.44785C90.0857 8.8589 93.8956 12.0455 96.4625 17.0365C99.8429 23.6093 100.654 32.4943 99.3735 42.4718C100.567 40.8848 101.794 39.3181 103.052 37.7756C115.617 22.3793 129.067 12.2281 140.718 8.3619C146.55 6.42663 151.997 6.04575 156.667 7.44868C161.364 8.85974 165.174 12.0464 167.741 17.0373C171.122 23.6102 171.933 32.4953 170.652 42.473C171.846 40.8851 173.073 39.3176 174.333 37.7743C186.897 22.378 200.347 12.2268 211.999 8.36057C217.831 6.42529 223.278 6.04442 227.948 7.44735Z"
                fill="black"
              ></path>
              <path
                d="M96 66.7273C96 63.0119 99.0119 60 102.727 60H259.273C262.988 60 266 63.0119 266 66.7273V176.273C266 179.988 262.988 183 259.273 183H102.727C99.0119 183 96 179.988 96 176.273V66.7273Z"
                fill="#C7B9FF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M95 66.7273C95 62.4596 98.4596 59 102.727 59H259.273C263.54 59 267 62.4596 267 66.7273V176.273C267 180.54 263.54 184 259.273 184H102.727C98.4596 184 95 180.54 95 176.273V66.7273ZM102.727 61C99.5642 61 97 63.5642 97 66.7273V176.273C97 179.436 99.5642 182 102.727 182H259.273C262.436 182 265 179.436 265 176.273V66.7273C265 63.5642 262.436 61 259.273 61H102.727Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M222.804 76.7872C231.159 84.8098 229.021 98.1384 220.865 107.133C211.503 117.458 185.865 140.208 142.374 151.933C141.619 154.697 141.945 155.947 142.133 156.29C142.182 156.38 142.362 156.709 143.248 157.083C144.236 157.501 145.97 157.905 148.801 157.932C154.509 157.985 163.294 156.503 176.108 152.578C188.825 148.683 205.132 142.501 225.746 133.457C228.959 132.046 232.708 133.509 234.118 136.722C235.528 139.936 234.066 143.684 230.852 145.094C209.975 154.254 193.18 160.64 179.83 164.729C166.576 168.789 156.328 170.71 148.683 170.639C141.239 170.57 134.337 168.525 130.982 162.385C129.702 160.045 129.195 157.535 129.188 155.018C119.267 156.995 108.542 158.378 97 158.948V146.214C110.138 145.527 122.115 143.728 132.961 141.191C137.996 130.75 147.523 118.738 156.927 108.416C167.503 96.8081 178.776 86.4229 185.313 81.646C200.07 70.8623 214.275 68.5973 222.804 76.7872ZM150.806 136.071C155.077 129.949 160.511 123.352 166.322 116.974C176.594 105.699 187.224 95.9894 192.811 91.9066C206.489 81.9114 212.672 84.6768 214.002 85.954C215.507 87.3984 216.976 92.5033 211.451 98.5965C204.25 106.538 184.467 124.531 150.806 136.071Z"
                fill="#5551FF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M219.096 80.6492C224.565 85.9004 223.946 95.7643 216.899 103.536C207.922 113.437 182.289 136.295 138.228 147.481C136.322 152.362 136.001 156.235 137.435 158.858C138.843 161.434 142.196 163.225 148.751 163.285C155.275 163.346 164.676 161.679 177.676 157.698C190.66 153.72 207.172 147.453 227.897 138.359C228.403 138.138 228.993 138.368 229.215 138.873C229.437 139.379 229.206 139.969 228.701 140.191C207.934 149.303 191.345 155.602 178.261 159.61C165.193 163.613 155.561 165.349 148.733 165.285C141.936 165.222 137.617 163.362 135.68 159.817C133.964 156.678 134.322 152.561 135.882 148.061C123.921 150.942 110.638 152.955 96 153.631V151.628C111.02 150.928 124.593 148.807 136.757 145.787C140.982 135.729 150.735 123.163 160.885 112.022C171.333 100.554 182.335 90.4534 188.472 85.9689C202.774 75.5174 213.599 75.3718 219.096 80.6492ZM139.219 145.159C143.588 135.68 152.703 123.972 162.364 113.369C172.764 101.953 183.665 91.9589 189.652 87.5836C203.784 77.2563 213.347 77.9023 217.711 82.0919C222.101 86.3078 222.051 94.8775 215.417 102.193C206.759 111.742 181.941 133.953 139.219 145.159Z"
                fill="black"
              ></path>
              <path
                d="M278.125 77.4464L290.034 89.3067C291.55 90.8162 291.55 93.277 290.034 94.7865L248.589 136.063L228.134 139.095L231.178 118.723L272.623 77.4464C274.151 75.9369 276.61 75.9369 278.125 77.4464Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M273.329 78.151C273.328 78.1514 273.328 78.1518 273.328 78.1521L232.119 119.193L229.322 137.913L248.115 135.128L289.326 94.0837C290.452 92.9625 290.452 91.1307 289.326 90.0095L277.418 78.1492C276.295 77.0307 274.469 77.0261 273.329 78.151ZM271.918 76.7406C273.835 74.8476 276.925 74.8434 278.833 76.7436L290.742 88.6039C292.647 90.5017 292.647 93.5915 290.742 95.4893L249.063 136.998L226.947 140.276L230.237 118.252L271.915 76.7436L271.918 76.7406Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M264.598 85.4659L282.009 102.806L280.594 104.212L263.183 86.8715L264.598 85.4659Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M183.318 9.00002L119.409 9.00002L119.409 7.00002L183.318 7.00002L183.318 9.00002Z"
                fill="black"
              ></path>
              <path
                d="M183.378 1.68184L189.742 8.0458L183.378 14.4098L177.014 8.0458L183.378 1.68184Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M183.378 0.492611L190.931 8.0458L183.378 15.599L175.825 8.0458L183.378 0.492611ZM183.378 2.87106L178.203 8.0458L183.378 13.2205L188.553 8.0458L183.378 2.87106Z"
                fill="black"
              ></path>
              <path
                d="M114.423 1.68184L120.787 8.0458L114.423 14.4098L108.059 8.0458L114.423 1.68184Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M114.423 0.492611L121.976 8.0458L114.423 15.599L106.87 8.0458L114.423 0.492611ZM114.423 2.87106L109.248 8.0458L114.423 13.2205L119.598 8.0458L114.423 2.87106Z"
                fill="black"
              ></path>
              <path
                d="M19.7957 138.699C19.1525 141.099 16.685 142.524 14.2844 141.881C11.8838 141.238 10.4592 138.77 11.1024 136.369C11.7456 133.969 14.2132 132.544 16.6138 133.187C19.0144 133.831 20.439 136.298 19.7957 138.699Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.355 134.153C14.4879 133.653 12.5687 134.761 12.0684 136.628C11.5681 138.495 12.6761 140.415 14.5433 140.915C16.4104 141.415 18.3296 140.307 18.8299 138.44C19.3302 136.573 18.2221 134.654 16.355 134.153ZM10.1366 136.111C10.9227 133.177 13.9386 131.435 16.8727 132.221C19.8067 133.008 21.5479 136.024 20.7617 138.958C19.9756 141.892 16.9597 143.633 14.0256 142.847C11.0916 142.06 9.35037 139.045 10.1366 136.111Z"
                fill="black"
              ></path>
              <path
                d="M92.1143 138.699C91.4711 141.099 89.0036 142.524 86.603 141.881C84.2024 141.238 82.7778 138.77 83.421 136.369C84.0642 133.969 86.5318 132.544 88.9324 133.187C91.333 133.831 92.7576 136.298 92.1143 138.699Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M88.6736 134.153C86.8065 133.653 84.8873 134.761 84.387 136.628C83.8867 138.495 84.9948 140.415 86.8619 140.915C88.729 141.415 90.6482 140.307 91.1485 138.44C91.6488 136.573 90.5407 134.654 88.6736 134.153ZM82.4552 136.111C83.2413 133.177 86.2572 131.435 89.1913 132.221C92.1253 133.008 93.8665 136.024 93.0803 138.958C92.2942 141.892 89.2783 143.633 86.3442 142.847C83.4102 142.06 81.669 139.045 82.4552 136.111Z"
                fill="black"
              ></path>
              <path
                d="M88.7506 8.67605C88.1073 11.0767 85.6398 12.5013 83.2392 11.858C80.8386 11.2148 79.414 8.74728 80.0572 6.34668C80.7005 3.94608 83.168 2.52146 85.5686 3.1647C87.9692 3.80794 89.3938 6.27546 88.7506 8.67605Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.3098 4.13063C83.4427 3.63033 81.5235 4.73837 81.0232 6.6055C80.5229 8.47263 81.631 10.3918 83.4981 10.8921C85.3652 11.3924 87.2844 10.2844 87.7847 8.41724C88.285 6.5501 87.177 4.63093 85.3098 4.13063ZM79.0914 6.08786C79.8776 3.1538 82.8934 1.4126 85.8275 2.19878C88.7615 2.98496 90.5028 6.00081 89.7166 8.93487C88.9304 11.8689 85.9145 13.6101 82.9805 12.824C80.0464 12.0378 78.3052 9.02193 79.0914 6.08786Z"
                fill="black"
              ></path>
              <path
                d="M155.858 8.67605C155.215 11.0767 152.747 12.5013 150.347 11.858C147.946 11.2148 146.521 8.74728 147.165 6.34668C147.808 3.94608 150.275 2.52146 152.676 3.1647C155.077 3.80794 156.501 6.27546 155.858 8.67605Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M152.417 4.13063C150.55 3.63033 148.631 4.73837 148.131 6.6055C147.63 8.47263 148.738 10.3918 150.606 10.8921C152.473 11.3924 154.392 10.2844 154.892 8.41724C155.392 6.5501 154.284 4.63093 152.417 4.13063ZM146.199 6.08786C146.985 3.1538 150.001 1.4126 152.935 2.19878C155.869 2.98496 157.61 6.00081 156.824 8.93487C156.038 11.8689 153.022 13.6101 150.088 12.824C147.154 12.0378 145.413 9.02193 146.199 6.08786Z"
                fill="black"
              ></path>
              <path
                d="M230.024 8.67605C229.38 11.0767 226.913 12.5013 224.512 11.858C222.112 11.2148 220.687 8.74728 221.33 6.34668C221.973 3.94608 224.441 2.52146 226.842 3.1647C229.242 3.80794 230.667 6.27546 230.024 8.67605Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M226.583 4.13063C224.716 3.63033 222.796 4.73837 222.296 6.6055C221.796 8.47263 222.904 10.3918 224.771 10.8921C226.638 11.3924 228.557 10.2844 229.058 8.41724C229.558 6.5501 228.45 4.63093 226.583 4.13063ZM220.364 6.08786C221.151 3.1538 224.166 1.4126 227.1 2.19878C230.034 2.98496 231.776 6.00081 230.99 8.93487C230.203 11.8689 227.187 13.6101 224.253 12.824C221.319 12.0378 219.578 9.02193 220.364 6.08786Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.6687 155.218C42.2328 165.084 51.2898 172.375 62.0694 172.375C64.5186 172.375 66.8789 171.999 69.0943 171.301L79.9128 181.997L94.7794 167.299L84.037 156.679C84.7893 154.424 85.1963 152.015 85.1963 149.511C85.1963 138.472 77.2828 129.26 66.7582 127.117L28.4318 116.255L39.6687 155.218Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.974 114.807L38.7039 155.48C41.3847 165.771 50.8312 173.37 62.0694 173.37C64.4085 173.37 66.6715 173.04 68.8126 172.425L79.9128 183.4L96.1979 167.299L85.1746 156.401C85.8393 154.219 86.1963 151.905 86.1963 149.511C86.1963 137.999 77.9541 128.399 66.9962 126.15L26.974 114.807ZM29.8895 117.702L66.5205 128.084L66.5576 128.091C76.6302 130.142 84.1963 138.957 84.1963 149.511C84.1963 151.907 83.8069 154.211 83.0879 156.366L82.8929 156.95L93.3609 167.299L79.9128 180.595L69.3698 170.171L68.7925 170.353C66.6736 171.02 64.415 171.381 62.0694 171.381C51.7531 171.381 43.0887 164.403 40.6369 154.969L40.6336 154.956L29.8895 117.702Z"
                fill="black"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.1635 117.875L62.0701 151.74L63.4834 150.325L29.5768 116.46L28.1635 117.875Z"
                fill="black"
              ></path>
              <ellipse
                cx="6"
                cy="6.00051"
                rx="6"
                ry="6.00051"
                transform="matrix(-3.177e-07 1 1 -1.11224e-07 54.6849 143.038)"
                fill="black"
              ></ellipse>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M292.423 36.1591C284.431 34.3605 278.14 28.0689 276.341 20.0767C274.542 28.0689 268.251 34.3605 260.259 36.1591C268.251 37.9577 274.542 44.2493 276.341 52.2415C278.14 44.2493 284.431 37.9577 292.423 36.1591Z"
                fill="#699BF7"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M277.341 17.812L277.341 7.56818H277.341H275.341H275.341L275.341 17.812L275.341 17.8671C275.31 27.3937 267.328 35.1591 257.421 35.1591H249.432V35.1591H249.432V37.1591H257.421C267.333 37.1591 275.318 44.9318 275.341 54.4646C275.341 54.4785 275.341 54.4923 275.341 54.5062L275.341 64.75H275.341H277.341H277.341L277.341 54.5062C277.341 54.4923 277.341 54.4785 277.341 54.4646C277.364 44.9318 285.349 37.1591 295.261 37.1591L303.25 37.1591V35.1591H295.261C285.354 35.1591 277.372 27.3937 277.341 17.8671L277.341 17.812ZM288.926 36.1591C283 34.2289 278.306 29.6653 276.341 23.8847C274.376 29.6653 269.682 34.2289 263.756 36.1591C269.682 38.0893 274.376 42.6529 276.341 48.4336C278.306 42.6529 283 38.0893 288.926 36.1591Z"
                fill="black"
              ></path>
            </svg>
          </Item1cont22>
        </Comp2item2>
      </Link>
    </>
  );
};

export default Comp2item1Card2;

const Comp2item2 = styled.div`
  width: 600px;
  height: 200px;
  margin-left: 30px;
  background: yellow;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    width: 250px;
  }
`;

const Item1cont21 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
`;
const Item1cont22 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
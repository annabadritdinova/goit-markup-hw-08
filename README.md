.subscribe {
      padding-top: 60px;
      @media screen and (min-width: 1200px) {
        padding-top: 12px;
        margin-left: auto;
      }

      .subscribe-form {
        display: flex;
        align-items: center;

        .subscribe-field {
          height: 50px;
          width: 100%;

     @media screen and (min-width: 768px) {
      width: 450px;
    }

      @media screen and (min-width: 1200px) {
      width: 358px;
      margin-right: 12px;
      margin-bottom: 0px;
      }



          
          padding: 15px 0px 15px 16px;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-sizing: border-box;
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
          border-radius: 4px;
          background: #2f303a;
          line-height: 20px;
          font-size: 16px;
          align-items: center
          transition: all $time;

          &:focus {
            border-color: $secondary-accent-color;
            outline-style: none;
            box-shadow: none ;
          }


        }

        .subscribe-button {
          width: 200px;
          height: 50px;
          padding-right: 0px;
          padding-left: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 28px 10px 29px;
          margin-left: auto;
          margin-right: auto;
          color: $primary-white-color;
          background-color: $accent-color;
          border-color: $accent-color;
          text-align: center;
          cursor: pointer;
          border-style: none;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
          border-radius: 4px;

          transition: background-color $time;

          font-size: 16px;

          svg {
            margin-left: 10px;
          }
        }
